import React from "react";
import Data from "./data/data";
import Select from "./select";
import Charts from "./charts/charts";

const Main = ({ state, dispatch }) => {
  return (
    <main className="container">
      <div className="row">
        <section className="col-12 col-lg-6 p-3">
          <Select
            templates={state.templates}
            currentTemplate={state.currentTemplate}
            dispatch={dispatch}
          />
          <Data state={state} dispatch={dispatch} />
        </section>
        <section className="col-12 col-lg-6 p-3">
          <Charts state={state} />
        </section>
      </div>
    </main>
  );
};

export default Main;
