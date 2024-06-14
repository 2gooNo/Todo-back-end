import mergeTypeDefs from "graphql-tools-merge-typedefs";
import { teamType } from "./teamSchema";
import { todoType } from "./todoSchema";

export const typeDefs = mergeTypeDefs([todoType, teamType]);
