import { gql } from "graphql-tag";

export const userSchema = gql`
  type Todo {
    title: String
    status: Boolean
    team: String
    _id: String
  }
  type User {
    id: ID!
    username: String!
    email: String!
    password: String!
    createdOn: String
    todos: [Todo]
  }
  input UserInput {
    email: String
    password: String
  }
  type Query {
    getUser(input: UserInput!): User
    getAllUser: [User]
  }

  input CreateUserInput {
    username: String!
    email: String!
    password: String!
  }

  # input UpdateUserInput {
  #   id: ID!
  #   username: String
  #   email: String
  #   password: String
  # }

  # input DeleteUserInput {
  #   id: ID!
  # }

  type Mutation {
    addUser(input: CreateUserInput!): User
    # updateUser(input: UpdateUserInput!): User
    # deleteUser(input: DeleteUserInput!): Boolean
  }
`;

export default userSchema;
