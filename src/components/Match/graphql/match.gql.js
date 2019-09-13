import { gql } from "apollo-boost";

export const DELETE_MATCH = gql`
  mutation($id: Int!) {
    deleteMatch(id: $id)
  }
`;
