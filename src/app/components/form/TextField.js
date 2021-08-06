import { h } from "dom-chef";
import { isValidEmail } from "./helpers";
import { VALIDATION_TYPE } from "./constants";
import ControlBase from "./ControlBase.js";

class TextField extends ControlBase {
  isValid(updateUI = true) {
    const { value, validation, isRequired } = this.props;

    if ((validation && isRequired) || (validation && value)) {
      switch (validation) {
        case VALIDATION_TYPE.EMAIL:
          this.hasErrors = !isValidEmail(value);
          break;
        default:
          // VALIDATION_TYPE.NON_EMPTY
          this.hasErrors = String(value || "").trim().length === 0;
      }
    } else {
      this.hasErrors = false;
    }

    updateUI && this.updateAfterValidate();
    return !this.hasErrors;
  }

  render() {
    return (
      <div id={this.formItemWrapperId} className={"form-input form-item"}>
        <div className="error-caption">{this.props.error}</div>
        <div className="control">
          <label for={this.props.id}>
            {this.props.label}
            {this.props.isRequired && "*"}
          </label>
          <input
            type="text"
            onBlur={(e) => {
              this.onValueUpdate(e);
            }}
            name={this.props.id}
            id={this.props.id}
            value={this.value ? this.value : ""}
          />
        </div>
      </div>
    );
  }
}

export default TextField;
