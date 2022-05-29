const { AuthenticationError } = require("apollo-server-express");
const { User, Thought } = require("../models");
const { signToken } = require("../utils/auth");
const resolvers = {
  Query: {
    classes: async () => {
      return await Class.find({});
    },
  },
};

module.exports = resolvers;
