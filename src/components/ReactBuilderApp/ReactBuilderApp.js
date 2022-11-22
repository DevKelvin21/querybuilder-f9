import React from "react";
import {
  bootstrapControlClassnames,
  bootstrapControlElements,
} from "@react-querybuilder/bootstrap";
import { QueryBuilderBootstrap } from '@react-querybuilder/bootstrap';
import { QueryBuilder, formatQuery } from "react-querybuilder";
import './ReactBuilderApp.scss'


const ReactBuilderApp = ({fields})=> {
  return (
      <div className="row">
        <QueryBuilderBootstrap>
          <QueryBuilder
              fields={fields}
              controlElements={bootstrapControlElements}
              controlClassnames={bootstrapControlClassnames}
          />
        </QueryBuilderBootstrap>
      </div>
  );
}

export default ReactBuilderApp;