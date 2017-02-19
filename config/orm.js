var connection = require('./connection.js');
var mysql = require('mysql');

//Here, we are creating our orm with functions to fire when we make a query call. Our functions will fire that query.
var orm = {
    selectAll: function (tableInput, callBack){
        var queryString = 'SELECT * FROM ' + tableInput + ';' ;
        connection.query(queryString, function(error, result){
            if(error){
                throw error;
            }
            callBack(result);
        });
    }
    ,
    // Remember, ?? is looking for a tablename or a colname, ? is looking for a value. 
    insertOne: function(tableInput, colName, values, callBack){
        var queryString = 'INSERT INTO ?? SET ?';
        connection.query(queryString, tableInput, values, function (error, result){
            if(error){
                throw error;
            }
            callBack(result);
        });
    },

    // updateOne: function(tableInput, id,  callBack){
    //     var queryString = 'UPDATE ?? SET devoured = ? WHERE id = ?';
    //     connect.query(queryString, [burger_name, true, id], function (error, result){
    //         if(error){
    //             throw error;
    //         }
    //         callBack(result);
    //     });
    // }

};

module.exports = orm;