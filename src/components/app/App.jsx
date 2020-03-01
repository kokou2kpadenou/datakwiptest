import React, { useReducer } from "react";

import Header from "../header/header";
import Footer from "../footer/footer";
import Main from "../main/main";

import { initialState, reducer } from "./reducer";

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="">
      <Header />
      <Main state={state} dispatch={dispatch} />
      <Footer />
    </div>
  );
};

export default App;
