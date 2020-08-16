import { Prisma } from "prisma-binding";
import { fragmentReplacements } from "./resolvers/index";
const prisma = new Prisma({
  typeDefs: "src/generated/prisma.graphql",
  endpoint: "[PRISMA_CLOUD_ENDPOINT]",
  secret: "[SECRET_KEY]",
  fragmentReplacements,
});

export default prisma;
