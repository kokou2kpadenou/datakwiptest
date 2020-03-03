import React from "react";
import "bootstrap/dist/js/bootstrap.bundle";

import Setting from "./settings";
import Graphics from "./graphics";
import WarningMsg from "./warningMsg";

const Main = ({ state, dispatch }) => {
  return (
    <main className="container">
      {/* Warning Dialog Box */}
      <WarningMsg data={state.warning} />

      <div className="row">
        <section className="col-12 col-lg-6 p-3">
          <Setting state={state} dispatch={dispatch} />
        </section>

        <section className="col-12 col-lg-6 p-3">
          <Graphics graphics={state.graphics} dispatch={dispatch} />
        </section>
      </div>
    </main>
  );
};

export default Main;
