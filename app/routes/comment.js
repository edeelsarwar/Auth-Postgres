module.exports = app => {
    const comments = require("../controller/comment");
    
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", comments.createComment);
  
  
    // Retrieve a single Tutorial with id
    router.get("/:id", comments.findCommentById);
  


    app.use('/api/comments', router);
  };