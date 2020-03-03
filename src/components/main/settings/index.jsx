import React from "react";
import Data from "./data/data";
import Select from "./select";
import DescInput from "./descInput";
import SubmitButton from "./submitButton";

const Setting = ({ state, dispatch }) => {
  return (
    <>
      {/* Template Select */}
      <Select
        templates={state.templates}
        currentTemplate={state.currentTemplate}
        dispatch={dispatch}
      />

      {/* Description Input */}
      <DescInput description={state.description} dispatch={dispatch} />

      {/* Data Table */}
      <Data state={state} dispatch={dispatch} />

      {/* butttons submit */}
      <SubmitButton dispatch={dispatch} state={state} />
    </>
  );
};

export default Setting;
