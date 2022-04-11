import SdkAuth from "@commercetools/sdk-auth";
import fetch from "node-fetch";

const authClient = new SdkAuth({
  host: "https://auth.europe-west1.gcp.commercetools.com",
  projectKey: "lego-qa",
  disableRefreshToken: false,
  credentials: {
    clientId: "<clientid>",
    clientSecret: "<secret>",
  },
  scopes: ["manage_products:lego-qa"],
  fetch,
});

export const getCtToken = async () => {
  return await authClient.clientCredentialsFlow();
};
