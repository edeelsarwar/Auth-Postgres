const { GraphQLList } = require("graphql");
const TutorialType = require('../TypeDeffs/TutorialType')
const db = require('../../models/index')
const tutorial = db.tutorials
module.exports.TUTORIAL_LIST = {
    type: new GraphQLList(TutorialType),
    resolve(parent,args){
        let data = tutorial.findAll()
        return data
    }
}