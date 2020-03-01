import React from "react";
import PropTypes from "prop-types";

const Dialog = ({ title, id, children }) => {
  return (
    <div className="modal" id={`${id}-dlg`} tabIndex="-1" role="dialog">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{title}</h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};

Dialog.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.any.isRequired
};

export default Dialog;
