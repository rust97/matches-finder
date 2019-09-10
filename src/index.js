import React from "react";
import ReactDOM from "react-dom";
import App from "./modules/App";
import { ApolloProvider } from "@apollo/react-hooks";
import { Provider } from "react-redux";
import { store } from "./store/index";
import { client } from "./services/api-graphql";

ReactDOM.render(
  <ApolloProvider client={client}>
    <Provider store={store}>
      <App />
    </Provider>
  </ApolloProvider>,
  document.getElementById("root")
);
