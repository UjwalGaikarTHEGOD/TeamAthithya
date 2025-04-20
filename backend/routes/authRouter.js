const User = require('../models/user');

const express = require('express');
const router = express.Router();

router.post( "/signup",async (req, res) => {
  const { name , email ,password , phone} = req.body;
console.log(req.body)
  try {
    const newUser = await User.create({
        name: name,
        email: email,
        password: password,
        phone: phone
    })

    if(!newUser){
        return res.status(500).json({ msg: "something went wriong in user creation"})
    }
    console.log("NEW USER CREATED : \n",newUser)
    res.status(200).json({ msg: 'Signup successful' });
  } 
  catch (err) 
  {
    console.log(err);
    res.status(500).json({ msg: 'Server error' });
  }
})

router.post("/login" , async (req,res)=>{
    const {email,password} = req.body;
    try {
        const user = await User.findOne({email: email});
        if(!user){
            return res.status(404).json({msg: "User not found"})
        }

        if(user.password !== password)
        {
            return res.status(400).json({msg: "incorrect password"})
        }

        console.log("USER LOGIN: \n",user)
        res.status(200).json({ msg: 'Login successful' });
    }
    catch(err){
        console.log(err);
        return res.status(500).json({msg: "Server error"})
    }
})


module.exports = router;