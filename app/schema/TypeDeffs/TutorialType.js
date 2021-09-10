const graphql = require('graphql')
const { GraphQLObjectType,GraphQLInt,GraphQLString,GraphQLBoolean } = graphql;

const TutorialType = new GraphQLObjectType({

    name:'tutorial',
    fields:()=>({
        id:{type:GraphQLInt},
        title:{type:GraphQLString},
        description:{type:GraphQLString},
        publish:{type:GraphQLBoolean}
    })
})
module.exports = TutorialType;