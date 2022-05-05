function formValidation()  
{  
var name = document.registration.username;  
var add = document.registration.address;  
var country = document.registration.country;  
var zip = document.registration.zip;  
var email = document.registration.email;  

 
 
{  
if(allLetter(name))  
{  
if(alphanumeric(add))  
{   
if(countryselect(country))  
{  
if(allnumeric(zip))  
{  
if(ValidateEmail(email))  
 
{  
}  
}   
}  
}   
}  
}  
 
 
return false;  
  
} 




function allLetter(name)  
{   
var letters = /^[A-Za-z]+$/;  
if(name.value.match(letters))  
{  
return true;  
}  
else  
{  
alert('Enter your First Name');  
name.focus();  
return false;  
}  
}  
function alphanumeric(add)  
{   
var letters = /^[0-9a-zA-Z]+$/;  
if(add.value.match(letters))  
{  
return true;  
}  
else  
{  
alert('Enter your User address');  
add.focus();  
return false;  
}  
}  
function countryselect(country)  
{  
if(country.value == "Default")  
{  
alert('Select your status');  
country.focus();  
return false;  
}  
else  
{  
return true;  
}  
}  
function allnumeric(zip)  
{   
var numbers = /^[0-9]+$/;  
if(zip.value.match(numbers))  
{  
return true;  
}  
else  
{  
alert('ZIP code must have numeric characters only');  
zip.focus();  
return false;  
}  
}  
function ValidateEmail(email)  
{  
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;  
if(email.value.match(mailformat))  
{  
return true;  
}  
else  
{  
alert("You have entered an invalid email address!");  
email.focus();  
return false;  
}  
} 



function validmale(male,female)  
{  
x=0;  
  
if(male.checked)   
{  
x++;  
} if(female.checked)  
{  
x++;   
}  
if(x==0)  
{  
alert('Select Male/Female');  
male.focus();  
return false;  
}  
else  
{  
alert('Form Succesfully Submitted');  
window.location.reload()  
return true;  
}  
} 


