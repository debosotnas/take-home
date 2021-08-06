import { h } from "dom-chef";
import "./FormControls.sass";
import TextField from "./TextField.js";
import DropDownSelect from "./DropDownSelect.js";
import CheckBoxGroup from "./CheckBoxGroup.js";
import FormButtons from "./FormButtons.js";
import { FORM_CONTROL_TYPES, CONTROLS } from "./constants.js";

export class FormControl {
  constructor(initData = {}) {
    this.rawControls = initData.controls ? initData.controls : CONTROLS;
    this.domControls = this.rawControls
      .map((props) => {
        switch (props.type) {
          case FORM_CONTROL_TYPES.TEXT_INPUT:
            return new TextField({ ...props });
          case FORM_CONTROL_TYPES.DROPDOWN_SELECT:
            return new DropDownSelect({ ...props });
          case FORM_CONTROL_TYPES.CHECKBOX_GROUP:
            return new CheckBoxGroup({ ...props });
          default:
            return null;
        }
      })
      .filter(Boolean);
  }

  isValid() {
    return !this.domControls
      .map((c) => c.isValid && c.isValid())
      .some((v) => v === false);
  }

  resetForm() {
    this.domControls.forEach((c) => c.reset && c.reset());
  }

  getData() {
    return this.domControls
      .map((c) => c.getData())
      .reduce((prev, curr) => {
        return { ...prev, ...curr };
      }, {});
  }

  submitSignUp(event) {
    event && event.preventDefault && event.preventDefault();
    const isValid = this.isValid();
    if (isValid) {
      console.log(this.getData());
    }
  }

  render() {
    return (
      <form
        onReset={() => {
          this.resetForm();
        }}
        method="POST"
        onSubmit={(e) => {
          this.submitSignUp(e);
        }}
      >
        <div className="form-controls">
          {this.domControls.map((c) => c && c.render && c.render())}
        </div>
        <FormButtons />
      </form>
    );
  }
}

export default FormControl;
