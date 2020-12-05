var express = require("express");
var burger = require("../models/burger")
var router = express.Router();

router.get("/",function(req,res){
  burger.all(function(data){
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/burgers", function(req, res){
  burger.create(
    [req.body.name],
    function(result){
      res.json({ id: result.insertId})
    }
  )
});

router.put("/api/burgers/:id", function(req,res){
  var result = req.params.id
  console.log(result)
  burger.update(result, function(err){
    console.log(err)
  } )
});


  
module.exports = router;
//create router