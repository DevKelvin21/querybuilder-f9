import React from "react";
import {
  bootstrapControlClassnames,
  bootstrapControlElements,
} from "@react-querybuilder/bootstrap";
import { QueryBuilder } from "react-querybuilder";



const ReactBuilderApp = ({fields})=> {
  return (
    <QueryBuilder
        fields={fields}
        controlElements={bootstrapControlElements}
        controlClassnames={bootstrapControlClassnames}
    />
  );
}

export default ReactBuilderApp;