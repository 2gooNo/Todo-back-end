import { gql } from "graphql-tag";

export const teamType = gql`
  type Team {
    teamName: String
  }
  type Query {
    getAllTeam: [Team]
  }
  input addTeamInput {
    teamName: String
  }

  type Mutation {
    addTeam(input: addTeamInput): [Team]
  }
`;
