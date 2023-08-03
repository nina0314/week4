var express = require('express'); //Used for routing 
var app = express();
var http = require('http').Server(app); //Used to provide http functionality 
var cors = require('cors');
var path = require('path');
app.use(cors());

var bodyParser = require('body-parser');
app.use(bodyParser.json());

let server = http.listen(3000, function() {
    let host = server.address().address;
    let port = server.address().port;
    console.log("Server listening on port: " + port);
});

app.post('/api/auth', require('./routes/postLogin'));

// app.post('/api/auth', function(req,res){
    
//     let users = [{'username': 'abc1234', 'birthdate': '24/10/2002', 'age': 21, 'email': 'abc1234@gmail.com', 'pwd': '123', 'valid': false}, 
//                  {'username': 'def1234', 'birthdate': '03/14/2002', 'age': 20, 'email': 'def1234@gmail.com', 'pwd': '123', 'valid': false},
//                  {'username': 'ghi1234', 'birthdate': '16/09/1997', 'age': 25, 'email': 'ghi1234@gmail.com', 'pwd': '123', 'valid': false}];

//     if(!req.body)
//     {
//         return res.sendStatus(400);
//     }

//     var customer = {}; //Create a new customer object that can be sent back as a response
//     customer.username = req.body.username; //Assign the username object of customer to the username from response 
//     customer.birthdate = req.body.birthdate; //Assign the birthdate object of customer to the birthdate from response
//     customer.age = req.body.age; //Assign the age object of customer to the age from response
//     customer.email = req.body.email; //Assign the email object of customer to the email from response
//     customer.password = req.body.password; //Assign the password object of customer to the password from response
//     customer.valid = false; //Assign valid object to false as default 

//     //Loop through each users to see if they match 
//     for(i = 0; i < users.length; i++)
//     {
//         if(req.body.username == users[i].username && req.body.birthdate == users[i].birthdate && req.body.age == users[i].age && req.body.email == users[i].email && req.body.password == users[i].password)
//         {
//             users[i].valid = true;
//             res.send(users[i]);
//             console.log("true");
//             break;
//         }
//         else
//         {
//             customer.valid = false;
//             console.log("false");
//         }
//     }

//     res.send(customer);
   
// });