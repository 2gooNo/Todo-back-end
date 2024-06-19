import { gql } from "graphql-tag";

export const userType = gql`
  type User {
    userName: String
    password: String
    email: String
    _id: String
  }
  input addUserInput {
    userName: String
    password: String
    email: String
  }
  type Mutation {
    createUser(input: addUserInput): [User]
  }
  type Query {
    getAllUser: [User]
  }
`;
