import { gql } from "apollo-boost";

export const DATA = gql`
  mutation($url: String!, $home: String!, $away: String!, $start: String!, $game: Int!) {
    addMatch(newMatch: { url: $url, home: $home, away: $away, start: $start, game: $game }) {
      id
      home
      away
      start
      url
    }
  }
`;
