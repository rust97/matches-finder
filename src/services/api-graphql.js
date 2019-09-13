import ApolloClient from "apollo-boost";

export const client = new ApolloClient({
  uri: "https://bet2u.eu/dynamic/admin/api/graphql/"
});
