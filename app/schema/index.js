const graphql = require("graphql");
const {
  GraphQLObjectType,
  GraphQLSchema,
} = graphql;

const { TUTORIAL_LIST } = require("./Queries/Tutorial_list");
const { TUTORIAL_ADD } = require("../schema/Mutations/tutorial");

var db = require("../models/index");
const tutorial = db.tutorials;

const RootQuery = new GraphQLObjectType({
  name: "xyz",
  fields: {
    tutorialList: TUTORIAL_LIST,
  },
});

const Mutation = new GraphQLObjectType({
  name : 'mutation',
  fields:{
     createTutorial : TUTORIAL_ADD
  }
})
module.exports = new GraphQLSchema({ query: RootQuery, mutation:Mutation });
