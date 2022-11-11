import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import NavBar from "../../components/NavBar/NavBar";
import QueryViewer from "../../components/QueryViewer/QueryViewer";

import getData from "../../db";
import LogicBuilder from "../LogicBuilder/LogicBuilder";

const Home = () => {
  const [webhook, setWebhook] = useState("");
  const [fields, setFields] = useState({});
  const [query, setQuery] = useState(undefined);
  const [querySelector, setQuerySelector] = useState("");
  const [state, setState] = useState("");

  async function handleDynamicFields(){
    const idDocument = webhook.split("/").pop();
    const fieldsData = await getData(idDocument);
    if(fieldsData[0] === "No such document!"){
      setFields({});
      setQuery(undefined);
    }else{
      setQuery(fieldsData[0]);
      const keyFields = Object.keys(fieldsData[0]);
      const fields = {};
      keyFields.forEach((key) => {
        fields[key] = {
          label: key,
          type: "text",
          valueSources: ["value"],
          preferWidgets: ["text"],
        };
      });
      setFields(fields);
    }
  }


  useEffect(() => {
    setWebhook("http://127.0.0.1:5000/webhook-k9lx22t5-77")
    
    if(state){
      handleDynamicFields();
    }

    return () => {
      setFields({});
      setQuery({});
    };
  }, [state]);

  if(querySelector!=="awesome"){
    return (
      <div className="container-fluid text-center">
        <div className="row">
          <NavBar/>
          <section className="col-3 mt-3">
            <QueryViewer query={query}/>
          </section>
          <section className="col-9 mt-3">
            <div div className="alert alert-success" role="alert">
              <h4 className="alert-heading">Welcome</h4>
              <p>This is your unique webhook please copy from here</p>
              <hr />
              <div className="row">
                <div className="col-4">
                  <span className="input-group-text mb-0" id="">
                    {webhook}
                  </span>
                </div>
                <div className="col-3">
                  <Button onClick={() => navigator.clipboard.writeText(webhook)} variant="light">
                    copy to clipboard
                  </Button>
                </div>
              </div>
            </div>
            {!query ? <Button onClick={()=>(setState("fetch"))}>Fetch Queries</Button>: <Button onClick={()=>(setQuerySelector("awesome"))}>Go to LogicFlow</Button>}
          </section>
        </div>
      </div>
    );
  }else{
    return(
      <LogicBuilder fields={fields} />
    )
  }

};

export default Home;
