const graphql = require('graphql')
const { GraphQLObjectType,GraphQLInt,GraphQLString } = graphql;

const TutorialType = new GraphQLObjectType({

    name:'tutorial',
    fields:()=>({
        id:{type:GraphQLInt},
        title:{type:GraphQLString},
        description:{type:GraphQLString},
        publish:{type:GraphQLString}
    })
})
module.exports = TutorialType;