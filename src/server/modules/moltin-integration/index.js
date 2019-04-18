import { gateway } from "@moltin/sdk";
import typeDefs from "./schema.gql";
import resolvers from "./resolvers";

const Moltin = gateway({
  client_id: process.env.ADAPTCOMMERCE_MOLTIN_CLIENT_ID,
  client_secret: process.env.ADAPTCOMMERCE_MOLTIN_CLIENT_SECRET
});

export default {
  namespace: "Moltin",
  context: Moltin,
  typeDefs,
  resolvers
};
