import mergeTypeDefs from "graphql-tools-merge-typedefs";
import { teamType } from "./teamSchema";
import { todoType } from "./todoSchema";
import { userSchema } from "./userSchema";
export const typeDefs = mergeTypeDefs([todoType, teamType, userSchema]);
