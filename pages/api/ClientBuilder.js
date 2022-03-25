import fetch from "node-fetch";
import { ClientBuilder } from "@commercetools/sdk-client-v2";
import { createApiBuilderFromCtpClient } from "@commercetools/platform-sdk";

export const projectKey = "lego-qa";
const clientId = process.env.ADMIN_CLIENT_ID;
const secret = process.env.ADMIN_CLIENT_SECRET;
const authMiddlewareOptions = {
  host: "https://auth.europe-west1.gcp.commercetools.com",
  projectKey,
  credentials: {
    clientId: clientId,
    clientSecret: secret,
  },
  scopes: ["manage_products:lego-qa"],
  fetch,
};

console.log(clientId, secret);

const httpMiddlewareOptions = {
  host: "https://api.europe-west1.gcp.commercetools.com",
  fetch,
};

const client = new ClientBuilder()
  .withProjectKey(projectKey)
  .withClientCredentialsFlow(authMiddlewareOptions)
  .withHttpMiddleware(httpMiddlewareOptions)
  .withLoggerMiddleware()
  .build();

export const getApiRoot = () => {
  return createApiBuilderFromCtpClient(client);
};
