// In this file, we are creating all of the functions that contain our express routes. 

//var express = require('express');

// Here, we are requiring our burger.js file, which is in the models folder. This file contains our ORM, which is created to interact with our database. In practice, we have built routes in this file that call on the ORM functions to interact with our database when the route is called. 
var burgerData = require('../models/burger.js');

// var app = express();

module.exports = function (app){
    // Here, when we type the / in the browser, it is a get request. It performs a function, that uses the 
    app.get("/", function (request, response){
        burgerData.selectAll(function(data){
            var burgerObj = {
                burgers: data
            };
            console.log(burgerObj);
            response.json(burgerObj);
        });
    });

    app.post("/", function (request, response){
        burgerData.insertOne(request.body.burger_name, request.body.devoured, function(){
            var burgerObj = {
                burgers: data
            };
            console.log(burgerObj);
            response.json(burgerObj);
            response.redirect("/");

        });
    });

    app.put("/:id", function (request, response){
        var condition = "id = " + req.params.id;

        console.log("Current condition: " + condition);

        burgerData.updateOne({ 
            devoured: req.body.devoured}, condition, function(){
            response.redirect("/");
        });
    });

}