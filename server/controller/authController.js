const { log } = require('console');
const User = require('../models/User')

// Handle Error
const handleError = (error) => {
    console.log(error.message, error.code);
    let errors = { email: "", password: ''}

    // Validation errors
    if (error.message.includes('user validation failed')){
        Object.values(error.errors).forEach(({properties}) => {
            errors[properties.path] = properties.message;
        })
    }

    return errors;
}


exports.signup_get = (req,res)=> {
    res.render('signup')
}

exports.login_get = (req,res)=> {
    res.render('login')
}

exports.signup_post = async (req,res)=> {
    const { email, password } = req.body;

    try {
        const user = await User.create({email, password});
        res.status(201).json(user);
    } catch (error) {
        const errors = handleError(error);
        res.status(400).json({ errors });
    }

}

exports.login_post = async (req,res)=> {
    res.send('user login')
}