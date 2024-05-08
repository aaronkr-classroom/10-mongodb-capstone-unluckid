const mongoose = require("mongoose"),
Subscriber  = require("./models/Subscriber");
mongoose.connect(
    "mongodb+srv://mymarket67:1234@cluster0.tagycdz.mongodb.net/"
);
var subscribers = [
    {
        name:"dd",
        email:"a@b.com",
        newsletter:true,
    },
    {
        name:"ff",
        email:"b@b.com",
        newsletter:false,
    },
    {
        name:"gg",
        email:"c@b.com",
        newsletter:true,
    },
    {
        name:"hh",
        email:"d@b.com",
        newsletter:true,
    },
    {
        name:"kk",
        email:"e@b.com",
        newsletter:false,
    },
]
/** Subscriber
    .deleteMany({})
    .exec()
    .then(result =>{
        console.log("delete");
    })
    .catch(error=>{
        console.log(`Error:$error.mesage}`);

    });
**/
    var commands =[];
    subscribers.forEach(s=> {
        commands.push(
            Subscriber
            .create({
                name:s.name,
                email: s.email,
                newsletter: s.newsletter,
            })
            .then(s =>{
                console.log(`Created: ${s.name}`);
            })
        );
    });
    Promise.all(commands)
    .then(r =>{
        console.log(JSON.stringify(r, null , 2));
        mongoose.connection.close();
    })
    .catch( e=>{
        console.log(e);
    });