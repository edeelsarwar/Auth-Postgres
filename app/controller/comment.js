const db = require("../models");
const Comment = db.comments;

/////////////////////////  Comments /////////////////////////
exports.createComment = (req , res) => {
    console.log(req.body,'herer')
    return Comment.create({
      name: req.body.name,
      text: req.body.text,
      tutorialId: req.body.tutorialId,
    })
      .then((comment) => {
        console.log(">> Created comment: " + JSON.stringify(comment, null, 4));
        res.send(comment);
      })
      .catch((err) => {
        console.log(">> Error while creating comment: ", err);
      });
  };

  exports.findCommentById = (req , res) => {
    const id = req.params.id;
    console.log('here',req)
    return Comment.findByPk(id,{
      attributes: ['name' ] ,
      include: [{
         model:db.tutorials,
         as: "tutorial",
         attributes:['title'] 
    }] })
      .then((comment) => {
        res.send(comment);
      })
      .catch((err) => {
        console.log(">> Error while finding comment: ", err);
      });
  };


  /////////////////////end comment////////////////////////////
