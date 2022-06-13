const jwt = require('jsonwebtoken');

exports.authenticated = async(req, res, next) => {

    if (req.headers.authorization){

        const token = req.headers.authorization.split(" ")[1];
        const user = jwt.verify(token,'test');

        req.user = user;

    } else{

        return res.status(401).json({message:'Login to Access'})
    }

    next();
}

exports.isAdmin = async(req, res, next) => {

    if (req.user.role !== 'admin') {

        return res.status(401).json({message:'Admin Access denied'})
    }

    next();
}

exports.isTeacher = async(req, res, next) => {

    if(req.user.role !== 'teacher') {

        return res.status(401).json({message : 'Teacher Access denied'})
    }

    next();
}

exports.isStudent = async(req, res, next) => {

    if (req.user.role !== 'student') {

        return res.status(401).json({message : 'Student Access denied'})
    }

    next();
}