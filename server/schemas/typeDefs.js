const {gql} = require('apollo-server-express')

const typeDefs = gql`
type User {

}

type Book {

}

type Auth {

}

input BookInput {

}

type Query {
    me: 
}

type Mutation {
    login():
    addUser():
    saveBook():
    removeBook():
}
`;

module.exports = typeDefs;