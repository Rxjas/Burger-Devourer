var connection = require("../config/connection");
//TBD
var orm = {
    selectAll: function(cb){
        var queryString = "SELECT * FROM burgers_db.burgers;";
        connection.query(queryString, function(err, result){
            if (err) {throw err;}
            cb(result);
        });
    },

    insertOne: function(vals, cb){
        var queryString = "INSERT INTO burgers_db.burgers (burger_name) VALUES (??)";

        queryString += vals;
        queryString += ") ";
    
        connection.query(queryString, vals, function(err, result) {
          if (err) {
            throw err;
          }
    
          cb(result);
        });
    },

    updateOne: function(vals, cb){
        var queryString = "UPDATE burgers_db.burgers SET devoured = true  WHERE id = (??)";
        query.connection(queryString, vals, function(err, result){
            if (err) {throw err;}
            cb(result)
        });
    },
};// end of ORM

module.exports = orm;