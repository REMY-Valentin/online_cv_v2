// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

import skills from "./skills";
import projects from "./projects";

export default createSchema({
  // We name our schema
  name: "default",

  types: schemaTypes.concat([skills, projects]),
});
