import React, { useReducer, useEffect, lazy, Suspense } from "react";

import Header from "../header/header";
import Footer from "../footer/footer";

import { initialState, reducer } from "./reducer";

const Main = lazy(() => import("../main/main"));

const localState = JSON.parse(localStorage.getItem("state"));

const App = () => {
  const [state, dispatch] = useReducer(reducer, localState || initialState);

  useEffect(() => {
    localStorage.setItem("state", JSON.stringify(state));
  }, [state]);

  return (
    <div>
      <Header />
      <Suspense
        fallback={
          <div
            style={{
              minHeight: "610px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "#007bff",
              fontSize: "2rem"
            }}
          >
            Loading...
          </div>
        }
      >
        <Main state={state} dispatch={dispatch} />
      </Suspense>
      <Footer />
    </div>
  );
};

export default App;
