import React from "react";

const DescInput = ({ description, dispatch }) => {
  return (
    <div className="input-group mb-3">
      <div className="input-group-prepend">
        <span className="input-group-text" id="basic-addon1">
          Description
        </span>
      </div>
      <input
        type="text"
        value={description}
        className="form-control"
        placeholder="Description"
        aria-label="Description"
        aria-describedby="Description"
        onChange={e =>
          dispatch({ type: "DESCRIPTION_CHANGE", payload: e.target.value })
        }
      />
    </div>
  );
};

export default DescInput;
