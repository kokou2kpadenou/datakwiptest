import React from "react";

const ChartLayout = ({ graphic, children, dispatch, order }) => (
  <div>
    <div className="border px-3 pb-4 mb-5 ">
      {graphic && (
        <>
          <div className="d-flex justify-content-between align-items-center">
            <div className="h1 ">{order}</div>
            <div className="d-flex justify-content-end">
              <button
                type="button"
                className="btn btn-outline-primary btn-sm mr-2 my-3"
                data-toggle="modal"
                data-target="#warning-dlg"
                onClick={() =>
                  dispatch({
                    type: "SET_WARNING",
                    payload: {
                      msg: `This graphic "${graphic.description}" data will be loaded in the data table. Existing data in the table will be lost. Do you want to continue?`,
                      handleConfirm: () =>
                        dispatch({
                          type: "RELOAD_ELEMENTS",
                          payload: graphic.elements
                        })
                    }
                  })
                }
              >
                Reload in Table
              </button>
              <button
                type="button"
                className="btn btn-outline-danger btn-sm my-3"
                data-toggle="modal"
                data-target="#warning-dlg"
                onClick={() =>
                  dispatch({
                    type: "SET_WARNING",
                    payload: {
                      msg: `This graphic "${graphic.description}" will be deleted permanently. Do you want to continue?`,
                      handleConfirm: () =>
                        dispatch({
                          type: "DELETE_GRAPHIC",
                          payload: graphic.id
                        })
                    }
                  })
                }
              >
                Remove
              </button>
            </div>
          </div>
          <h2 className="text-center mb-4">{graphic.description}</h2>
        </>
      )}

      <div
        className="d-flex justify-content-center align-items-center"
        style={{ minHeight: "400px" }}
      >
        {children}
      </div>
    </div>
  </div>
);

export default ChartLayout;
