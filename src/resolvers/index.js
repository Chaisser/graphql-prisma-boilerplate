import { extractFragmentReplacements } from "prisma-binding";

import Query from "./Query";
import Mutation from "./Mutation";
import Subscription from "./Subscription";

const resolvers = {
  Query,
  Mutation,
  Subscription,
};

const fragmentReplacements = extractFragmentReplacements(resolvers);

export { resolvers, fragmentReplacements };
