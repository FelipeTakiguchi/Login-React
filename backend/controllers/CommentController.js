const Comment = require('../models/Comment');
const Post = require('../models/Post');

class CommentController {
    static async create(req, res) {
        const { postId, owner, content } = req.body;

        if (!content || !owner)
            return res.status(400).send({ message: "Dados inválidos" })

        const comment = {
            content: content,
            owner: owner
        }

        const c = await Comment.create(comment);

        // Updating on Post
        const post = await Post.findById(postId);

        const newComment = {
            id: c._id,
            time: new Date().getTime()
        }

        try {
            post.comments.push(newComment);
            await Post.findByIdAndUpdate(postId, { comments: post.comments });
        } catch (error) {
            return res.status(500).send({ error: error });
        }

        return res.status(201)
            .send({ message: "Comment inserido com sucesso", body: c });
    }

    static async getAll(req, res) {
        try {
            const comment = await Comment.find();
            return res.status(200).send({ data: comment });
        } catch (error) {
            return res.status(500).send({ error: error });
        }
    }

    static async getCommentById(req, res) {
        const { id } = req.params;

        try {
            const comment = await Comment.findById(id);
            if (!comment)
                return res.status(404).send({ message: "comment not found " })
            return res.status(200).json(comment);
        } catch (error) {
            return res.status(500).json({ error: error })
        }
    }

    static async updateComment(req, res) {
        const { id } = req.params;
        if (!id)
            return res.status(400).send({ message: "No id provider" })

        const comment = req.body;
        if (!comment.content)
            return res.status(400).send({ message: "No Content provider" })

        try {
            const newComment = await Comment.findByIdAndUpdate(
                id,
                { content: comment.content }
            );
            return res.status(201).send(newComment);
        } catch (error) {
            return res.status(500).send({ error: error });
        }
    }

    static async deleteById(req, res) {
        const { id } = req.params;
        if (!id)
            return res.status(400).send({ message: "No id provider" });

        try {
            await Comment.findByIdAndRemove(id);
            return res.status(200).send({ message: "Comment deleted successfully" })
        } catch (error) {
            console.log(error);
            return res.status(500).send({ message: "Something failled" })
        }
    }
}
module.exports = CommentController;