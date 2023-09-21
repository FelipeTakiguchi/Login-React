const Post = require('../models/Post');

class CommentController {
    static async create(req, res) {
        const { postId, owner, content } = req.body;

        if (!content || !owner)
            return res.status(400).send({ message: "Dados inválidos" })

        // Updating on Post
        const post = await Post.findById(postId);

        var newId = 0;

        if (post.comments.length > 0) {
            newId = post.comments.length;
        }

        const newComment = {
            id: newId,
            time: new Date().getTime(),
            content: content,
            owner: owner,
            likes: [],
        }

        try {
            post.comments.push(newComment);
            post.save();
            return res.status(201).send({ message: "Comment inserido com sucesso", body: post });
        } catch (error) {
            return res.status(500).send({ error: error });
        }
    }
    static async updateLike(req, res) {
        const { commentId, postId, userId } = req.body;

        if (commentId == undefined || !postId || !userId)
            return res.status(400).send({ message: "No ID Provided" })

        try {
            const post = await Post.findById(postId);

            if (!post) {
                return res.status(404).send({ message: "Post not found" });
            }

            const comment = post.comments.find(comment => comment.id === commentId);

            if (!comment) {
                return res.status(404).send({ message: "Comment not found" });
            }

            const likes = comment.likes;

            if (likes.includes(userId)) {
                const index = likes.indexOf(userId);
                likes.splice(index, 1);
            } else {
                likes.push(userId);
            }

            post.markModified('comments');

            await post.save();

            return res.status(201).send({ message: "Like no comment atualizado com sucesso", body: post });
        } catch (error) {
            return res.status(500).send({ error: error });
        }
    }
}
module.exports = CommentController;