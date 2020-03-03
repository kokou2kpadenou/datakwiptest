import React from "react";
import Charts from "./charts";

const Graphics = ({ graphics, dispatch }) => {
  if (!graphics.length) return <Charts />;

  return (
    <>
      <div className="mb-3">
        <button
          type="button"
          className="btn btn-primary mr-2"
          onClick={() => {}}
        >
          Print Graphics
        </button>
        <button
          type="button"
          className="btn btn-danger mr-2"
          data-toggle="modal"
          data-target="#warning-dlg"
          onClick={() =>
            dispatch({
              type: "SET_WARNING",
              payload: {
                msg:
                  "This action will clear all the graphics permanently. Do you want to continue?",
                handleConfirm: () => dispatch({ type: "CLEAR_GRAPHICS" })
              }
            })
          }
        >
          Clear All Graphics
        </button>
      </div>
      {graphics.map(graphic => (
        <Charts key={graphic.id} graphic={graphic} dispatch={dispatch} />
      ))}
    </>
  );
};

export default Graphics;
