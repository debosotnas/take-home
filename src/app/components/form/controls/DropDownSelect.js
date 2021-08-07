import { h } from "dom-chef";
import { FORM_CONTROLS } from "../../../strings.js";
import ControlBase from "./ControlBase.js";

const INITIAL_DEFAULT_VALUE = "select-one";

class DropDownSelect extends ControlBase {
  constructor(props) {
    super(props);
    this.props.value = INITIAL_DEFAULT_VALUE;
  }

  isValid(updateUI = true) {
    const { value, isRequired } = this.props;
    this.hasErrors = isRequired ? value === INITIAL_DEFAULT_VALUE : true;
    updateUI && this.updateAfterValidate();
    return !this.hasErrors;
  }

  reset() {
    super.reset(INITIAL_DEFAULT_VALUE);
  }

  render() {
    const opts = Array.isArray(this.props.options) ? this.props.options : [];
    return (
      <div
        id={this.formItemWrapperId}
        className={"form-input form-item-dropdown"}
      >
        <div className="error-caption">{this.props.error}</div>
        <div className="control">
          <label for={this.props.id}>
            {this.props.label}
            {this.props.isRequired && "*"}
          </label>
          <select
            onChange={(e) => {
              this.onValueUpdate(e);
            }}
            id={this.props.id}
            name={this.props.id}
          >
            <option value={INITIAL_DEFAULT_VALUE}>
              {FORM_CONTROLS.SelectOne}
            </option>
            {opts.map(({ value, label }) => {
              return <option value={value}>{label}</option>;
            })}
          </select>
        </div>
      </div>
    );
  }
}

export default DropDownSelect;
