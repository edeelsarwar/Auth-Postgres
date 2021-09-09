const graphql = require('graphql')
const {
    GraphQLObjectType,
    GraphQLSchema,
    GraphQLInt,
    GraphQLString,
    GraphQLList,
} = graphql;

const UserType = new GraphQLObjectType({

    name:'tutorial',
    fields:()=>({
        id:{type:GraphQLInt},
        title:{type:GraphQLString},
        description:{type:GraphQLString},
        publish:{type:GraphQLString}
    })
})
var db =require('./app/models/index')
const tutorial = db.tutorials;
const RootQuery = new GraphQLObjectType({
    name:'xyz',
    fields:{
        codeimprove:{
            type : new GraphQLList(UserType),
            resolve(parent,args){
                let data = [
                    {
                    id:12,
                    name:'codeImprove',
                    email:'adeel@gmail.com',
                    phone:031045433234
                    },
                    {
                        id:13,
                        name:'codeImp',
                        email:'adeel@gmail.co.uk',
                        phone:0310454332342    
                    }
            ]
            return data
            }
        },

        userList : {
            type :new GraphQLList(UserType),
            resolve(parent,args){
                let data = tutorial.findAll()
                return data
            }
        }
    }
})

module.exports = new GraphQLSchema({ query: RootQuery})