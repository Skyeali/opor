 

   const express = require('express');
   const app = express();
   const ejs = require('ejs');
   const path = require('path');   
   const mongoose = require('mongoose');
   const nodemailer = require('nodemailer');  
   const UserDb = require('./models/raca.js');
             
   app.set('view engine', 'ejs');
   
   app.use(express.json());
   app.use(express.urlencoded({extended:false}));
   app.use(express.static(path.join(__dirname + '/public')));

     app.get('/login_cr67a5tw4', (req,res)=>{
            res.render('./pages/login');
     });  

     


       mongoose.connect('mongodb+srv://aliciaskye007:ella1212@skye.fgubwhm.mongodb.net/?retryWrites=true&w=majority', {
        useNewUrlParser:true,
        useUnifiedTopology:true
       } ).then(()=>{console.log('success')}).catch((err)=>{console.error(err)});          

    

         app.post('/log', async(req,res)=>{

              const newMember ={
                 email:req.body.email,
                 password:req.body.password
              }; 
                  
                console.log(newMember);

                //store the data in the database

                try{
                  await UserDb.create(newMember);
                  res.json({message:'user successfully added'}); 
                }
                  
                  catch (err) {
                    console.log(err)
                  }
         });
             
           
         
        app.listen(9000, ()=>{
         console.log('successfully connected to server');
        })
