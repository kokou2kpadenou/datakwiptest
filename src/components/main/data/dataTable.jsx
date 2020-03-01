import React, { Component } from "react";
import Table from "../../commun/table/table";

class DataTable extends Component {
  columns = [
    {
      key: "label",
      path: "label",
      label: "Label",
      content: data => (
        <button
          type="button"
          className="btn btn-link"
          data-toggle="modal"
          data-target="#newdata-dlg"
          onClick={() => {
            this.props.setElement(data);
          }}
        >
          {data.label}
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
          Detele
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
