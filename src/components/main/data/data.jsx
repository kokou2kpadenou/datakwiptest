import React, { useState } from "react";
import _ from "lodash";
import Pagination from "../../commun/table/pagination";
import DataTable from "./dataTable";
import Dialog from "../../commun/dialog";
import DataForm from "../data/dataForm";

import { paginate } from "../../../utils";

const Data = ({ state, dispatch }) => {
  const [element, setElement] = useState({ label: "", data: "" });
  const handlePageChange = page => {
    dispatch({ type: "PAGE_CHANGE", payload: page });
  };

  const handleDelete = elementID => {
    dispatch({ type: "DELETE_ELEMENT", payload: elementID });
  };

  const handleSort = sortColumn => {
    dispatch({ type: "CHANGE_SORT", payload: sortColumn });
  };

  const getSettings = () => {
    const filtered = state.elements;

    const sorted = _.orderBy(
      filtered,
      state.sortColumn.path,
      state.sortColumn.order
    );

    const elements = paginate(sorted, state.currentPage, state.pageSize);

    const totalPages = Math.ceil(filtered.length / state.pageSize);

    return {
      totalPages: totalPages,
      elements
    };
  };

  const { totalPages, elements } = getSettings();

  return (
    <>
      <Dialog title="Add New Data" id="newdata">
        <DataForm
          element={element}
          state={state.elements}
          dispatch={dispatch}
        />
      </Dialog>

      <div className="mt-3">
        <button
          type="button"
          className="btn btn-primary mr-3 mb-3"
          data-toggle="modal"
          data-target="#newdata-dlg"
          onClick={() => setElement({ label: "", data: "" })}
        >
          Add Data
        </button>
        <button
          type="button"
          className="btn btn-danger mb-3"
          onClick={() => dispatch({ type: "CLEAR_ALL_ELEMENTS" })}
        >
          Clear Data Table
        </button>
      </div>
      <div style={{ minHeight: "400px" }}>
        <DataTable
          datas={elements}
          sortColumn={state.sortColumn}
          onDelete={handleDelete}
          onSort={handleSort}
          setElement={setElement}
        />
      </div>
      <Pagination
        totalPages={totalPages}
        currentPage={state.currentPage}
        onPageChange={handlePageChange}
      />
    </>
  );
};

export default Data;
