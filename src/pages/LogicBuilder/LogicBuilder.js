import React, { useState } from "react";
import BuilderAppAwesome from "../../components/BuilderAppAwesome/BuilderApp";
import NavBar from "../../components/NavBar/NavBar";
import ReactBuilderApp from "../../components/ReactBuilderApp/ReactBuilderApp";
import './LogicBuilder.scss'

const LogicBuilder = ({ fields }) => {
  const [state, setState] = useState("awesome");

  return (
    <div className="container-fluid">
      <div className="row">
        <NavBar />
        <section className="mt-3">
        <div className="btn-group" role="group">
            <button type="button" className="btn btn-primary" onClick={() => setState("awesome")} >Awesome QueryBuilder</button>
            <button type="button" className="btn btn-primary" onClick={() => setState("react")} >React QueryBuilder</button>
        </div>
        </section>
        <section className="mt-3">
          <div class="accordion" id="accordionPanelLogicFlow">
            <div class="accordion-item">
              <h2 class="accordion-header" id="panelLogicFlow-headingOne">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelLogicFlow-collapseOne" aria-expanded="true" aria-controls="panelLogicFlow-collapseOne">
                  <h3>Trigger</h3>
                </button>
              </h2>
              <div id="panelLogicFlow-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelLogicFlow-headingOne">
                <div class="accordion-body">
                {state === "awesome" ? (
                  <BuilderAppAwesome fields={fields} />
                ) : (
                  <ReactBuilderApp fields={fields} />
                )}
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="panelLogicFlow-headingTwo">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelLogicFlow-collapseTwo" aria-expanded="false" aria-controls="panelLogicFlow-collapseTwo">
                  <h3>Actions</h3>
                </button>
              </h2>
              <div id="panelLogicFlow-collapseTwo" class="accordion-collapse collapse" aria-labelledby="panelLogicFlow-headingTwo">
                <div class="accordion-body">
                {state === "awesome" ? (
                  <BuilderAppAwesome fields={fields} />
                ) : (
                  <ReactBuilderApp fields={fields} />
                )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default LogicBuilder;
