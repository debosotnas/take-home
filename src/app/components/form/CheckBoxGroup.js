import { h } from "dom-chef";
import ControlBase from "./ControlBase.js";

export class CheckBoxGroup extends ControlBase {
  isValid(updateUI = true) {
    const { isRequired } = this.props;
    const numRequired = !isNaN(isRequired) ? isRequired : 0;
    const list = this.getAllSelected();
    this.hasErrors = list.length < numRequired;
    updateUI && this.updateAfterValidate();
    return !this.hasErrors;
  }

  getAllSelected() {
    return document.querySelectorAll(
      `#${this.formItemWrapperId} .checkbox-wrapper input[type='checkbox']:checked`
    );
  }

  onValueUpdate() {
    this.hasErrors && this.isValid();
  }

  getData() {
    const list = Array.from(this.getAllSelected().values());
    return { [this.props.id]: list.map((sel) => sel.value) };
  }

  render() {
    const opts = Array.isArray(this.props.options) ? this.props.options : [];
    const checkGroupName = `${this.props.id}[]`;
    return (
      <div
        id={this.formItemWrapperId}
        className={"form-input form-item-checkbox-group"}
      >
        <div className="error-caption">{this.props.error}</div>
        <div className="control">
          {this.props.label && (
            <label>
              {this.props.label}
              {this.props.isRequired && "*"}
            </label>
          )}
          <div className="checkbox-wrapper">
            {opts.map(({ value, label }) => {
              return (
                <div className="checkbox-item">
                  <input
                    id={value}
                    name={checkGroupName}
                    type="checkbox"
                    value={value}
                    onClick={() => {
                      this.onValueUpdate();
                    }}
                  />{" "}
                  <label for={value}>{label}</label>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default CheckBoxGroup;
