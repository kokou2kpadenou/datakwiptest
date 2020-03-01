import React from "react";

const Select = ({ templates, currentTemplate, dispatch }) => {
  return (
    <div className="input-group mb-3">
      <div className="input-group-prepend">
        <label className="input-group-text" htmlFor="template">
          Template
        </label>
      </div>
      <select
        className="custom-select"
        name="template"
        id="template"
        value={currentTemplate}
        onChange={e =>
          dispatch({ type: "CHANGE_TEMPLATE", payload: e.target.value })
        }
      >
        <option value="">Choose...</option>
        {templates.map(template => (
          <option key={template.code} value={template.code}>
            {template.desc}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
