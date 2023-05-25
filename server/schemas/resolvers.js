const { AuthenticationError } = require('apollo-server-express');
const { User } = require('../models');
const { signToken } = require('../utils/auth');


const resolvers = {
    Query: {
        me: async (parent,args,context) => {

        }
    },
    Mutation: {
        addUser: async (parent, args) => {

        },
        login: async (parent, {email, password}) => {

        },
        saveBook: async (parent, { bookData }, context) => {

        },
        removeBook: async (parents, {bookId}, context) => {

        }
    }
}

module.exports = resolvers