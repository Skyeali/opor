 
  const express = require('express');
  const mongoose = require('mongoose');
   
    const MemberSchema = new mongoose.Schema({

        email:{
            type:String,
            required:true
        },  

         password:{
            type:String,
            required:true
         }

    }); 

        const User = mongoose.model('racsuccessors', MemberSchema);
        module.exports = User;
