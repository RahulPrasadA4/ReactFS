const express = require('express')
const router = express.Router()
const signupTemplateCopy = require('../models/SignupModels.js')




 router.post('/signup', (req, res)=>{
     const signedupEmp = new signupTemplateCopy({
        fullname:req.body.fullname
     }) 
     signedupEmp.save().then(data=>{
         res.json(data)
     })
     .catch(error => {
        res.json(error)
     })
 })



 module.exports = router