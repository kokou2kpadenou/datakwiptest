import React from "react";

const SubmitButton = ({ dispatch, state }) => (
  <div className="my-4">
    <button
      disabled={
        state.elements.length <= 0 || !state.description || !state.templates
      }
      type="button"
      className="btn btn-primary btn-block btn-lg"
      onClick={() => {
        dispatch({
          type: "ADD_GRAPHIC",
          payload: {
            elements: state.elements,
            description: state.description,
            currentTemplate: state.currentTemplate
          }
        });
        dispatch({ type: "DESCRIPTION_CHANGE", payload: "" });
      }}
    >
      Submit
    </button>
  </div>
);

export default SubmitButton;
