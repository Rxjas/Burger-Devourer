var orm = require("../config/orm");

var burger = {
    all: function(cb){
        orm.selectAll(function(res){
            cb(res);
        });
    },
    
    create: function(vals, cb){
        orm.insertOne(vals, function(res){
            cb(res);
        });
    },

    update: function(vals, cb){
        orm.updateOne(vals, function(res){
            cb(res);
        });
    }
}; //end of burger object

module.exports = burger;