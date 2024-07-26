const express=require('express')
const {registerUser,currentUser,loginUser}=require('../controllers/userController')
const validateToken=require('../')