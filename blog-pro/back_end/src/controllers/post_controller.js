import { CommentSchema } from "../models/commentModel.js";
import { postUser } from "../models/post_model.js";
import { likePost } from "../models/postLikeModel.js";

export const createPost = async (req, res) => {
  try {
    const { title, content, tags } = req.body;

    if (!title || !content || !tags) {
      res.status(400).json({
        status: false,
        message: "all field is required",
      });
    }

    const addPost = await postUser.create({
      title,
      content,
      tags,
      authorId: req.user.id,
    });

    res.status(200).json({
      status: true,
      message: "posted",
      data: addPost,
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: `error in createPost ${error.message}`,
    });
  }
};

export const getPost = async (req, res) => {
  try {
    let { search, sortBy, order, page, limit } = req.query;

    page = parseInt(page) || 1;
    limit = parseInt(limit) || 10;

    if (page < 1) page = 1;
    if (limit > 20) limit = 20;
    if (limit < 1) limit = 5;
    let query = {};
    if (search) {
      query.$or = [
        { title: { $regex: search, $options: "i" } },
        { content: { $regex: search, $options: "i" } },
      ];
    }
    let sort = {};

    const shortByItems = ["title", "content"];

    if (sortBy && shortByItems.includes(sortBy)) {
      sort[sortBy] = order === "desc" ? -1 : 1;
    }

    const skip = (page - 1) * limit;

    const [blogs, total] = await Promise.all([
      postUser.find(query).sort(sort).skip(skip).limit(limit),
      postUser.countDocuments(query),
    ]);

    res.status(200).json({
      status: true,
      message: "your blogs",
      meta: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      },
      data: blogs,
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: `error in getPost ${error.message}`,
    });
  }
};

export const getSiglePost = async (req, res) => {
  try {
    const { id } = req.params;
    const findPost = await postUser.findById(id);

    if (!findPost) {
      res.status(404).json({
        status: false,
        message: "post not found",
      });
    }

    res.status(200).json({
      status: true,
      message: "Post fetched",
      data: findPost,
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: `error in gerSinglePost ${error.message}`,
    });
  }
};

export const updatePost = async (req, res) => {
  try {
    const { id } = req.params;
    const findPost = await postUser.findById(id);

    if (!findPost) {
      res.status(404).json({
        status: false,
        message: "post not found",
      });
    }

    const tags =
      JSON.stringify(req.body.tags) === JSON.stringify(findPost.tags);

    if (
      req.body.title === findPost.title &&
      req.body.content === findPost.content &&
      tags
    ) {
      return res.status(400).json({
        status: false,
        message: "not updated data",
      });
    }

    const updated = await postUser.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    res.status(200).json({
      status: true,
      message: "Post fetched",
      data: updated,
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: `error in updatePost ${error.message}`,
    });
  }
};

export const deletePost = async (req, res) => {
  try {
    const { id } = req.params;
    const findPost = await postUser.findOne({ _id: id });

    if (!findPost) {
      return res.status(404).json({
        status: false,
        message: "post not found",
      });
    }
    const dltPost = await postUser.findByIdAndDelete(id);

    res.status(200).json({
      status: true,
      message: "post successfully deleted",
      data: dltPost,
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: `error in deletePost ${error.message}`,
    });
  }
};

export const comment = async (req, res) => {
  try {
    const { postId } = req.params;
    const { comment } = req.body;
    const userId = req.user.id;

    const findPostId = await postUser.findById(postId);

    if (!findPostId) {
      return res.status(404).json({
        status: false,
        message: "post not found",
      });
    }
    const addComment = await CommentSchema.create({
      comment,
      postId,
      userId,
    });

    res.status(200).json({
      status: true,
      message: "comment successfully added",
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      mesage: `error in comment ${error.message}`,
    });
  }
};

export const getComments = async (req, res) => {
  try {
    const { postId } = req.params;

    const findComments = await CommentSchema.find({ postId })
      .populate("userId", "name email")
      .sort({ createdAt: -1 });

    return res.status(200).json({
      status: true,
      data: findComments,
    });
  } catch (error) {
    return res.status(500).json({
      status: false,
      message: error.message,
    });
  }
};

// export const likesPost = async (req, res) => {
//   try {
//     const { postId } = req.params;

//     const userId = req.user.id;
//     const finds = await postUser.findById(postId);

//     if (!finds) {
//       return res.status(404).json({
//         status: false,
//         mesage: "post not found",
//       });
//     }

//     const isLiked = finds.like.includes(userId);

//     if (isLiked) {
//       const updateLike = await postUser.findByIdAndUpdate(
//         postId,
//         {
//           $pull: { like: userId },
//         },
//         { new: true },
//       );

//       return res.status(200).json({
//         status: true,
//         message: "remove like",
//       });
//     } else {
//       const updateLike = await postUser.findByIdAndUpdate(
//         postId,
//         {
//           $addToSet: { like: userId },
//         },
//         { new: true },
//       );

//       res.status(200).json({
//         status: true,
//         message: "post liked",
//         likeCount: updateLike.likes.length,
//       });
//     }
//   } catch (error) {
//     return res.status(500).json({
//       status: false,
//       message: error.message,
//     });
//   }
// };

