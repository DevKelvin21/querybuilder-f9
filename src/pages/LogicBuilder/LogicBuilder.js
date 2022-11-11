import React, { useState } from "react";
import BuilderAppAwesome from "../../components/BuilderAppAwesome/BuilderApp";
import NavBar from "../../components/NavBar/NavBar";
import ReactBuilderApp from "../../components/ReactBuilderApp/ReactBuilderApp";

const LogicBuilder = ({ fields }) => {
  const [state, setState] = useState("awesome");

  return (
    <div className="container-fluid text-center">
      <div className="row">
        <NavBar />
        <section className="mt-3">
        <div class="btn-group" role="group">
            <button type="button" class="btn btn-primary" onClick={() => setState("awesome")} >Awesome QueryBuilder</button>
            <button type="button" class="btn btn-primary" onClick={() => setState("react")} >React QueryBuilder</button>
        </div>

          {state === "awesome" ? (
            <BuilderAppAwesome fields={fields} />
          ) : (
            <ReactBuilderApp fields={fields} />
          )}
        </section>
      </div>
    </div>
  );
};

export default LogicBuilder;
