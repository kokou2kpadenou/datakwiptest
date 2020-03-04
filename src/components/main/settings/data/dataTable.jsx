import React, { Component } from "react";
import Table from "../../../commun/table/table";

class DataTable extends Component {
  columns = [
    {
      key: "label",
      path: "label",
      label: "Label",
      content: data => (
        <button
          type="button"
          className="btn btn-link d-flex align-items-center"
          data-toggle="modal"
          data-target="#newdata-dlg"
          onClick={() => {
            this.props.setElement(data);
          }}
        >
          <span
            className="rounded-circle mr-2"
            style={{
              width: "1em",
              height: "1em",
              backgroundColor: data.bgColor
            }}
          ></span>
          <span>{data.label}</span>
        </button>
      )
    },
    { key: "data", path: "data", label: "Data" },
    {
      key: "delete",
      path: "",
      label: "",
      content: data => (
        <button
          type="button"
          className="btn btn-danger"
          data-toggle="modal"
          data-target="#warning-dlg"
          onClick={() => this.props.onDelete(data.label)}
        >
          Delete
        </button>
      )
    }
  ];

  render() {
    const { datas, sortColumn, onSort } = this.props;
    return (
      <Table
        data={datas}
        columns={this.columns}
        sortColumn={sortColumn}
        onSort={onSort}
      />
    );
  }
}

export default DataTable;
