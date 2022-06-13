const jwt = require('jsonwebtoken');


const User = require('../models/user');

exports.signin = async(req,res) => {

    const {email,password} = req.body;

    try{

        const existingUser = await User.findOne({email});
        
        if (! existingUser) return res.status(404).json({message : 'User Not Found'});

        const isPasswordCorrect = (password === existingUser.password);

        if (! isPasswordCorrect) return res.status(400).json({message : 'Invalid Credentials'});

        const token = jwt.sign({role : existingUser.role, email : existingUser.email, id : existingUser._id},'test',{expiresIn:'1h'});

        return res.status(200).json({id : existingUser._id, auth_token : token});

    } catch(error){

        return res.status(500).json({message:'Something went wrong !!!'});
    }

}


