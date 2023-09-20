const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const CryptoJS = require('crypto-js');
require('dotenv').config();

class AuthController{
    static async register(req, res){
        const { json } = req.body;

        const bytes  = CryptoJS.AES.decrypt(json, 'senhaultrasecreta123');
        var originalText = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
        
        console.log(originalText);

        if(!originalText.email || !originalText.name || !originalText.password) 
            return res.status(400)
                .send({ message: "Name or email or password not provider" })

        const salt = await bcrypt.genSalt(12);
        const passwordHash = await bcrypt.hash(originalText.password, salt);

        const user = new User({
            name: originalText.name,
            email: originalText.email,
            password: passwordHash
        });

        try {
            await user.save();
            return res.status(201).send({ message: "User created successfully" });
        } catch (error) {
            return res.status(500).send({ message: "Something failed" })
        }
    }

    static async login(req, res){
        const { json } = req.body;

        const bytes  = CryptoJS.AES.decrypt(json, 'senhaultrasecreta123');
        var originalText = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
        
        var email = originalText.email;
        var password = originalText.password;

        if(!email || !password) 
            return res.status(400)
                .send({ message: "Email or password not provider" })

        try {
            const user = await User.findOne({ email })
            console.log(user);
            if(!user)
                return res.status(400).send({ message: "Invalid Email or password" })
            if(!await bcrypt.compare(password, user.password)){
                return res.status(400).send({ message: "Invalid Email or password" })
            }
            const secret = process.env.SECRET;
            const token = jwt.sign(
                {
                    id: user._id,
                    name: user.name,
                },
                secret,
                {
                    expiresIn: '2 days'
                }
                
            );

            return res.status(200).send({token: token})
        } catch (error) {
            return res.status(500).send({ message: "Something failed" })
        }
    } 

    static async getUserById(req, res){
        const { id } = req.params;
        
        try {
            const user = await User.findById(id);
            if(!user) 
                return res.status(404).send({ message: "user not found " })
            return res.status(200).json(user);   
        } catch (error) {
            return res.status(500).json({ error: error })
        }
    }
}

module.exports = AuthController;