const User = require('../models/user');
const {validationResult} = require('express-validator');
const jwt = require('jsonwebtoken');
const expressJwt = require('express-jwt');



exports.signup = (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(422).json({
            error: errors.array()[0].msg
        })
    }
    const user = new User(req.body)
    user.save((err, user) => {
        if(err){
            return res.status(400).json({
                err: "Not able to store user in DB"
            })
        }
        res.status(200).json({
            name: user.name,
            email: user.email,
            id: user._id
        });
    })
}

exports.signin = (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(422).json({
            error: errors.array()[0].msg
        })
    }

    const {email, password} = req.body;
    User.findOne({email}, (err, user) => {
        if(err || !user){
            return res.status(400).json({
                error: "User email does not exist"
            })
        }
        if(!user.authenticate(password)){
            return res.status(401).json({
                error: "Email and password do not match"
            })
        }

        const token = jwt.sign({_id: user._id}, process.env.SECRET)
        res.cookie('token', token, {expire: new Date()+9999});

        const {_id, name, email, role} = user;
        return res.status(200).json({
            token, user: {
                _id, name, email, role
            }
        })
    })
}

exports.signout = (req, res) => {
    res.clearCookie('token');
    res.json({
        message: "User signout successfully"
    })
}
