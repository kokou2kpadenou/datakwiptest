import React, { useReducer, useEffect } from "react";

import Header from "../header/header";
import Footer from "../footer/footer";
import Main from "../main/main";

import { initialState, reducer } from "./reducer";

const localState = JSON.parse(localStorage.getItem("state"));

const App = () => {
  const [state, dispatch] = useReducer(reducer, localState || initialState);

  useEffect(() => {
    localStorage.setItem("state", JSON.stringify(state));
  }, [state]);

  return (
    <div className="">
      <Header />
      <Main state={state} dispatch={dispatch} />
      <Footer />
    </div>
  );
};

export default App;
