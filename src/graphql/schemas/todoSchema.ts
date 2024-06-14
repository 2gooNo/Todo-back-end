import { gql } from "graphql-tag";

export const todoType = gql`
  type Todo {
    title: String
    status: Boolean
    team: String
  }
  type Query {
    getAllTodo: [Todo]
  }
  input todoId {
    id: String
  }
  input CreateTodoInput {
    title: String
    status: Boolean
    team: String
  }
  type Mutation {
    addTodo(input: CreateTodoInput): [Todo]
    deleteTodo(input: todoId): [Todo]
  }
`;
