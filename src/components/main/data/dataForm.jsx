import React from "react";
import Joi from "joi-browser";
import Form from "../../commun/form/form";

class DataForm extends Form {
  state = {
    data: { label: "", data: "" },
    errors: {},
    update: false
  };

  schema = {
    label: Joi.string()
      .required()
      .label("Label"),
    data: Joi.number()
      .required()
      .integer()
      .label("Data")
  };

  componentDidUpdate(prevProps) {
    if (this.props.element.label !== prevProps.element.label) {
      this.setState({
        ...this.state,
        data: this.props.element,
        update: this.props.element.label ? true : false
      });
    }
  }

  doSubmit = () => {
    const action =
      this.props.state.filter(elt => elt.label === this.state.data.label)
        .length > 0
        ? { type: "UPDATE_ELEMENT", payload: this.state.data }
        : { type: "ADD_ELEMENT", payload: this.state.data };

    this.props.dispatch(action);
    this.setState({
      data: { label: "", data: "" },
      errors: {},
      update: false
    });
  };

  render() {
    return (
      <form>
        <div className="modal-body" style={{ minHeight: "150px" }}>
          {this.renderInput(
            "label",
            "Label",
            undefined,
            true,
            this.state.update
          )}
          {this.renderInput("data", "Data")}
        </div>
        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-secondary"
            data-dismiss="modal"
          >
            Cancel
          </button>
          <button
            disabled={this.validate()}
            type="button"
            className="btn btn-primary"
            data-dismiss="modal"
            onClick={this.handleSubmit}
          >
            Save changes
          </button>
        </div>
      </form>
    );
  }
}

export default DataForm;
