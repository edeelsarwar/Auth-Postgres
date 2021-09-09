const graphql = require("graphql");
const {
  GraphQLObjectType,
  GraphQLSchema,
} = graphql;

const { TUTORIAL_LIST } = require("./Queries/Tutorial_list");

var db = require("../models/index");
const tutorial = db.tutorials;

const RootQuery = new GraphQLObjectType({
  name: "xyz",
  fields: {
    tutorialList: TUTORIAL_LIST,
  },
});

module.exports = new GraphQLSchema({ query: RootQuery });
