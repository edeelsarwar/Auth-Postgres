const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
var morgan = require('morgan')
const db = require("./app/models");
var { graphqlHTTP } = require('express-graphql');
const schema = require('./app/schema/index')
db.sequelize.sync();


// db.sequelize.sync({ force: true }).then(() => {
//     console.log("Drop and re-sync db.");
//   });
const app = express();

var corsOptions = {
    origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
app.use(morgan('tiny'))
// simple route
app.get("/", (req, res) => {
    res.json({ message: "Welcome to bezkoder application." });
});
require("./app/routes/tutorial.js")(app);
require("./app/routes/comment.js")(app);
//////////////////////GraphQL///////////////////////////////

// const context = async req=>{
//     const host = req.headers.host;
//     const token = 'your-jwt-token'
//     return {host,token}
// }

// var root ={
//     db : db
// }

// app.use('/graphql', graphqlHTTP(async req => ({
//     schema: schema,
//     rootValue:root,
//     graphiql: true,
//     context: ()=> context(req)
//   })));

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
