import React, { useReducer, useEffect, lazy, Suspense } from "react";

import Header from "../header/header";
import Footer from "../footer/footer";

import { initialState, reducer } from "./reducer";

const Main = lazy(() => import("../main/main"));

const localState = JSON.parse(localStorage.getItem("state"));

const App = () => {
  const options = {
    currentTemplate: "",
    description: "",
    templates: [
      { code: "Polar", desc: "Polar" },
      { code: "Daughnut", desc: "Daughnut" },
      { code: "Bar", desc: "Bar" },
      { code: "Line", desc: "Line" },
      { code: "HorizontalBar", desc: "Horizontal Bar" }
    ],
    pageSize: 5,
    currentPage: 1,
    sortColumn: { path: "label", order: "asc" },
    warning: { msg: "", handleConfirm: () => {} }
  };

  const [state, dispatch] = useReducer(
    reducer,
    localState ? { ...localState, ...options } : initialState
  );

  useEffect(() => {
    localStorage.setItem(
      "state",
      JSON.stringify({ elements: state.elements, graphics: state.graphics })
    );
  }, [state.elements, state.graphics]);

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
