import React, { useRef } from "react";
import ReactToPrint from "react-to-print";
import Charts from "./charts";

const Graphics = ({ graphics, dispatch }) => {
  const ref = useRef();
  if (!graphics.length) return <Charts />;

  return (
    <>
      <div className="mb-3">
        <ReactToPrint
          trigger={() => (
            <button type="button" className="btn btn-primary mr-2">
              Print Graphics
            </button>
          )}
          content={() => ref.current}
        />

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
      <div ref={ref}>
        {graphics
          .map((graphic, id) => (
            <Charts
              key={graphic.id}
              graphic={graphic}
              dispatch={dispatch}
              order={id + 1}
            />
          ))
          .reverse()}
      </div>
    </>
  );
};

export default Graphics;
