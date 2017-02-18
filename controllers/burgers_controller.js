// In this file, we are creating all of the functions that contain our express routes. 

//var express = require('express');

// Here, we are requiring our burger.js file, which is in the models folder. This file contains our ORM, which is created to interact with our database. In practice, we have built routes in this file that call on the ORM functions to interact with our database when the route is called. 
var burgerData = require('../models/burger.js');

// var app = express();

module.exports = function (app){
    // Here, when we type the / in the browser, it is a get request. It performs a function, that uses the 
    app.get("/", function (request, response){
        burgerData.selectAll(function(response){
            response.send("hello world")
        });
    });

    app.post("/", function (request, response){
        burgerData("insertOne", burger_name, devoured, callBack);
    });

    app.put("/", function (request, response){
        burgerData("updateOne", burger_name, true, id);
    });
}