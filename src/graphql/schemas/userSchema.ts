import { gql } from "graphql-tag";

export const userSchema = gql`
  type User {
    id: ID!
    username: String!
    email: String!
    password: String!
    createdOn: String
  }

  type Query {
    # getUser(id: ID!): User
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
