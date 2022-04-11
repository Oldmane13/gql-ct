import { useQuery } from "react-query";
import { GraphQLClient, request } from "graphql-request";

export const useGetProducts = (key, query, variables, config = {}) => {
  const endpoint =
    "https://api.europe-west1.gcp.commercetools.com/lego-qa/graphql";
  const headers = {
    headers: {
      authorization: `Bearer <token>`,
    },
  };

  const graphQLClient = new GraphQLClient(endpoint, headers);

  const fetchData = async () => await graphQLClient.request(query, variables);

  // const fetchData = async () => await request(endpoint, query, variables);

  return useQuery(key, fetchData, config);
};
