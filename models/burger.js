// Here, we are creating an ORM, which refers to Object Relational Mapping, where are setting up the ORM to interact with our Database using an object. 

var orm = require('../config/orm.js');

var burgerData = {
    selectAll: function(callBack){
        orm.selectAll("burgers", function(res){
            callBack(res);
        });
    },

    insertOne: function(tableInput, burger_name, devoured, callBack){
        orm.insertOne("burger", burger_name, devoured, function(res){
            callBack(res);
        });
    },

    updateOne: function(tableInput, id, callBack){
        orm.updateOne("burger", id, function(res){
            callBack(res);
        });
    }
};

module.exports = burgerData;