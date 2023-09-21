const Post = require('../models/Post');

class CommentController {
    static async create(req, res) {
        const { postId, owner, content } = req.body;

        if (!content || !owner)
            return res.status(400).send({ message: "Dados inválidos" })

        // Updating on Post
        const post = await Post.findById(postId);

        var newId = 0;

        if(post.comments.length > 0){
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
        const { commentId, postId, userId } = req.body
        
        if (commentId == undefined|| !postId || !userId)
            return res.status(400).send({ message: "No ID Provided" })

        // Updating on Post
        const post = await Post.findById(postId);

        try {
            const likes = post.comments[commentId].likes;
            var flag = true;

            for (let i = 0; i < likes.length; i++) {
                if(likes[i] == userId)
                {
                    flag = false;
                }
            }
            
            if(flag){
                var newLike = post.comments[commentId].likes;
                newLike.push(userId);
                console.log(newLike);
                post.comments[commentId].likes = ['650c26d23a4391887b036571'];
                console.log(post.comments[commentId].likes);
            }
            else{
                post.comments[commentId].likes.remove(userId);
            }

            await post.save();
            return res.status(201).send({ message: "Like no comment atualizado com sucesso", body: post });
        } catch (error) {
            return res.status(500).send({ error: error });
        }
    }
}
module.exports = CommentController;