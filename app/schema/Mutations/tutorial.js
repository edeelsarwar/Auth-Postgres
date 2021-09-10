const { GraphQLList } = require("graphql");
const graphql = require('graphql')
const { GraphQLObjectType,GraphQLInt,GraphQLString,GraphQLBoolean } = graphql;
const TutorialType = require('../TypeDeffs/TutorialType')


module.exports.TUTORIAL_ADD = {
    type: TutorialType,
    args:{
        title: {type:GraphQLString},
        description: {type:GraphQLString},
        publish: {type:GraphQLBoolean}
    },
    resolve: async (parent,args,context)=>{
        let mydata = await context();
        console.log(mydata)
        let {db} = parent
        // console.log(db)
        
       let data =  db.tutorials.create(args)
        return data
    }
}