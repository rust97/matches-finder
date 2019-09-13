import { gql } from "apollo-boost";

export const DATA = gql`
  query {
    allMatches {
      id
      home
      away
      start
      url
    }
  }
`;
