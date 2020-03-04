import React from "react";
import Dialog from "../commun/dialog";

const WarningMsg = ({ data }) => (
  <Dialog title="Warning" id="warning">
    <div className="modal-body" style={{ minHeight: "150px" }}>
      {data.msg}
    </div>
    <div className="modal-footer">
      <button type="button" className="btn btn-secondary" data-dismiss="modal">
        No
      </button>
      <button
        type="button"
        className="btn btn-danger"
        data-dismiss="modal"
        onClick={data.handleConfirm}
      >
        Yes
      </button>
    </div>
  </Dialog>
);

export default WarningMsg;
