const Like = require('../models/Like');
const Post = require('../models/Post');

class LikeController {
    static async createOrUpdateLike(req, res) {
        const { value, userId, postId } = req.body;

        if (!userId || !postId)
            return res.status(400).send({ message: "No id(s) provider" })

        const like = {
            value: value,
            userId: userId,
            postId: postId
        }

        if (value == undefined || value == null)
            return res.status(400).send({ message: "No value provider" })

        const post = await Post.findById(postId);

        try {
            var newPost = null;

            if (value) {
                newPost = await Post.findByIdAndUpdate(
                    postId,
                    { likes: post.likes + 1 }
                );
            } else{
                newPost = await Post.findByIdAndUpdate(
                    postId,
                    { likes: post.likes - 1 }
                );
            }
        } catch (error) {
            return res.status(500).send({ error: error });
        }

        if (Like.findOne({ userId: userId, postId: postId })) {
            try {
                const newLike = await Like.findOneAndUpdate(
                    { userId: userId, postId: postId },
                    { value: !value }
                );
                return res.status(201).send(newLike);
            } catch (error) {
                return res.status(500).send({ error: error });
            }
        }

        const newLike = await Like.create(like);
        return newLike;
    }
}
module.exports = LikeController;