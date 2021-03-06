import React, { useState } from "react";
import _ from "lodash";
import Pagination from "../../../commun/table/pagination";
import DataTable from "./dataTable";
import Dialog from "../../../commun/dialog";
import DataForm from "../data/dataForm";
import Buttons from "./buttons";

import { paginate } from "../../../../utils";

const Data = ({ state, dispatch }) => {
  //

  const [element, setElement] = useState({ label: "", data: "" });

  const handlePageChange = page => {
    dispatch({ type: "PAGE_CHANGE", payload: page });
  };

  const handleDelete = elementID => {
    dispatch({
      type: "SET_WARNING",
      payload: {
        msg: `This action will delete permanently "${elementID}". Do you want to continue?`,
        handleConfirm: () =>
          dispatch({ type: "DELETE_ELEMENT", payload: elementID })
      }
    });
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

      <Buttons
        setElement={setElement}
        dispatch={dispatch}
        numberElement={state.elements.length}
      />

      <div style={{ minHeight: "380px" }}>
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
