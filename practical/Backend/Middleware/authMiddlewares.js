import jwt from "jsonwebtoken";

export const middleWare = (req, res, next) => {
    try {
        const token = req.headers.token;
        if (!token) {
            return res.status(401).json({ message: "no token here" });
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        console.log(decoded);
        next();
    } catch (error) {
        res.status(401).json({ message: "Unauthorized" });
    }
};