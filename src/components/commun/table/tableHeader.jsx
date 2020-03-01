import React from "react";

const TableHeader = ({ columns, sortColumn, onSort }) => {
  const raiseSort = path => {
    if (path === "") return null;
    const copySortColumn = { ...sortColumn };
    if (copySortColumn.path === path) {
      copySortColumn.order = copySortColumn.order === "asc" ? "desc" : "asc";
    } else {
      copySortColumn.path = path;
      copySortColumn.order = "asc";
    }
    onSort(copySortColumn);
  };

  const renderSortIcon = path => {
    if (path === "") return null;
    if (sortColumn.path !== path) return null;
    if (sortColumn.order === "asc") return <SortAsc />;
    return <SortDesc />;
  };

  return (
    <thead className="thead-dark">
      <tr>
        {columns.map(column => (
          <th key={column.key}>
            <span
              style={{ cursor: column.path === "" ? "default" : "pointer" }}
              onClick={() => raiseSort(column.path)}
            >
              {column.label} {renderSortIcon(column.path)}
            </span>
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;

const style = {
  display: "inline-block",
  width: "1em",
  height: "1em",
  strokeWidth: "0",
  stroke: "currentColor",
  fill: "currentColor"
};

const SortAsc = () => (
  <svg style={style} viewBox="0 0 16 28">
    <path d="M16 11c0 0.547-0.453 1-1 1h-14c-0.547 0-1-0.453-1-1 0-0.266 0.109-0.516 0.297-0.703l7-7c0.187-0.187 0.438-0.297 0.703-0.297s0.516 0.109 0.703 0.297l7 7c0.187 0.187 0.297 0.438 0.297 0.703z"></path>
  </svg>
);

const SortDesc = () => (
  <svg style={style} viewBox="0 0 16 28">
    <path d="M16 17c0 0.266-0.109 0.516-0.297 0.703l-7 7c-0.187 0.187-0.438 0.297-0.703 0.297s-0.516-0.109-0.703-0.297l-7-7c-0.187-0.187-0.297-0.438-0.297-0.703 0-0.547 0.453-1 1-1h14c0.547 0 1 0.453 1 1z"></path>
  </svg>
);
