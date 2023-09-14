const Post = require('../models/Post');

class PostController{
    static async create(req, res){
        const { title, content, userId } = req.body.post;

        if(!title || !content || !userId)
            return res.status(400).send({ message: "Dados inválidos" })
        
        const post = {
            title: title,
            content: content,
            userId: userId
        }
        
        const p = await Post.create(post);
        return res.status(201)
            .send({ message: "Post inserido com sucesso", body: p});
    }

    static async getAll(req, res){
        try {
            const post = await Post.find();
            console.log(post);
            return res.status(200).send({ data: post });
        } catch (error) {
            return res.status(500).send({ error: error });
        }
    }

    static async getPostById(req, res){
        const { id } = req.params;
         
        try {
            const post = await Post.findById(id);
            if(!post) 
                return res.status(404).send({ message: "post not found " })
            return res.status(200).json(post);   
        } catch (error) {
            return res.status(500).json({ error: error })
        }
    }

    static async updatePost(req, res){
        const { id } = req.params;
        if(!id)
            return res.status(400).send({ message: "No id provider" })
             
        const post = req.body;
        if(!post.content)
            return res.status(400).send({ message: "No Content provider" })
     
        try {
            const newPost = await Post.findByIdAndUpdate(
                id,
                { content: post.content }
            );
            return res.status(201).send(newPost);
        } catch (error) {
            return res.status(500).send({ error: error });
        }
    }

    static async deleteById(req, res){
        const { id } = req.params;
        if(!id)
            return res.status(400).send({ message: "No id provider" });
 
        try {
            await Post.findByIdAndRemove(id);
            return res.status(200).send({ message: "Post deleted successfully" })
        } catch (error) {
            console.log(error);
            return res.status(500).send({ message: "Something failled"})
        }
    }
}
module.exports = PostController;