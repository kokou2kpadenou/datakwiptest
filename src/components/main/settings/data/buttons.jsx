import React from "react";

const Buttons = ({ setElement, dispatch, numberElement }) => (
  <div>
    <button
      type="button"
      className="btn btn-primary mr-2 mb-3"
      data-toggle="modal"
      data-target="#newdata-dlg"
      onClick={() => setElement({ label: "", data: "" })}
    >
      Add
    </button>

    <button
      type="button"
      className="btn btn-warning mr-2 mb-3"
      data-toggle={numberElement ? "modal" : ""}
      data-target={numberElement ? "#warning-dlg" : ""}
      onClick={() => {
        if (numberElement) {
          dispatch({
            type: "SET_WARNING",
            payload: {
              msg:
                "This action will replace your data with a sample of data and you will permanently lose your data. Do you want to continue?",
              handleConfirm: () => dispatch({ type: "RESET_ALL_ELEMENTS" })
            }
          });
        } else {
          dispatch({ type: "RESET_ALL_ELEMENTS" });
        }
      }}
    >
      Sample
    </button>

    <button
      disabled={!numberElement}
      type="button"
      className="btn btn-danger mb-3"
      data-toggle="modal"
      data-target="#warning-dlg"
      onClick={() =>
        dispatch({
          type: "SET_WARNING",
          payload: {
            msg:
              "This action will empty the data table and you will permanently lose your data. Do you want to continue?",
            handleConfirm: () => dispatch({ type: "CLEAR_ALL_ELEMENTS" })
          }
        })
      }
    >
      Clear Table
    </button>
  </div>
);

export default Buttons;
