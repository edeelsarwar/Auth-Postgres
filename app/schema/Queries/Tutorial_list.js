const { GraphQLList } = require("graphql");

const TutorialType = require('../TypeDeffs/TutorialType')
const db = require('../../models/index')

module.exports.TUTORIAL_LIST = {
    type: new GraphQLList(TutorialType),
    resolve(parent,args){
        const {db} = parent
        let data = db.tutorials.findAll()
        return data
    }
}