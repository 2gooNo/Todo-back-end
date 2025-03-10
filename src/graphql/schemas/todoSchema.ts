import { gql } from "graphql-tag";

export const todoType = gql`
  type Todo {
    title: String
    status: Boolean
    team: String
    _id: String
    user_id
  }
  type Query {
    getAllTodo: [Todo]
  }
  input deleteTodoInput {
    todo_id: String
  }
  input CreateTodoInput {
    title: String
    status: Boolean
    team: String
    user_id:
  }
  input markAsDoneInput {
    todoId: String
  }
  type Mutation {
    addTodo(input: CreateTodoInput): [Todo]
    deleteTodo(input: deleteTodoInput): [Todo]
    markAsDone(input: markAsDoneInput): [Todo]
  }
`;
