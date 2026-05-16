import mongoose from "mongoose";

const submissionSchema = new mongoose.Schema(
  {
    assignmentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "assignment",
      required: true,
    },

    studentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "student",
      required: true,
    },

    file: {
      type: String,
      required: true,
    },

    status: {
      type: String,
      enum: ["pending", "submitted"],
      default: "submitted",
    },

    submittedAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true },
);

export const submission = mongoose.model("submission", submissionSchema);
