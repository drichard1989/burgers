var connecting = require('connection.js');

//Here, we are creating our orm with functions to fire when we make a query call. Our functions will fire that query.
var orm = {
    selectAll: function (tableInput, callBack){
        var queryString = 'SELECT * FROM ??';
        connection.query(queryString, [tableInput], function(error, result){
            if(error){
                throw error;
            }
            callBack(result);
        });
    },
    // Remember, ?? is looking for a tablename or a colname, ? is looking for a value. 
    insertOne: function(tableInput, burger_name, devoured, callBack){
        var queryString = 'INSERT INTO ?? VALUES ? ?';
        connect.query(queryString, [tableInput, burger_name, devoured], function (error, result){
            if(error){
                throw error;
            }
            callBack(result);
        });
    },

    updateOne: function(tableInput, id,  callBack){
        var queryString = 'UPDATE ?? SET devoured = ? WHERE id = ?';
        connect.query(queryString, [burger_name, true, id], function (error, result){
            if(error){
                throw error;
            }
            callBack(result);
        });
    }

};

module.exports = orm;