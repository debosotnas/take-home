import { h } from "dom-chef";
import "regenerator-runtime/runtime";
import "./FormControls.sass";
import TextField from "./controls/TextField.js";
import DropDownSelect from "./controls/DropDownSelect.js";
import CheckBoxGroup from "./controls/CheckBoxGroup.js";
import { FORM_CONTROL_TYPES, CONTROLS } from "./constants.js";
import { submitSignUp } from "./actions.js";
import { NetworkError, InvalidSubscriptionError } from "./Errors.js";
import { docSel, docSelSwitch } from "./helpers";

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
    this.isSubmitting = false;
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

  async submit(event) {
    event && event.preventDefault && event.preventDefault();
    if (this.isSubmitting) {
      return;
    }
    this.showHideError();
    const isValid = this.isValid();
    try {
      if (isValid) {
        this.isSubmitting = true;
        const payload = this.getData();
        const data = await submitSignUp(payload);
        this.showSuccess(data.msg);
      }
    } catch (e) {
      // Splitting Error Types to handle with custom UI for each in future.
      if (e instanceof NetworkError) {
        this.showHideError(e.message);
      } else if (e instanceof InvalidSubscriptionError) {
        this.showHideError(e.message);
      } else {
        this.showHideError(e.message);
      }
    } finally {
      this.isSubmitting = false;
    }
  }

  set isSubmitting(value) {
    const submitBtn = docSel('.form-buttons button[type="submit"]');
    if (!submitBtn) {
      return;
    }
    submitBtn.disabled = value;
    docSelSwitch("#formControlsForm", "loading", value);
    docSelSwitch('.form-buttons button[type="submit"]', "loading-basic", value);
  }

  showSuccess(msg) {
    const formControlMsg = docSel("#formControlsMsg");
    formControlMsg.innerHTML = msg;
    formControlMsg.classList.add("success");
    formControlMsg.classList.remove("error");
    const formControlBody = docSel("#formControlsForm");
    formControlBody.classList.add("success");
  }

  showHideError(msg = "") {
    const formControlMsg = docSel("#formControlsMsg");
    formControlMsg.innerHTML = msg;
    docSelSwitch("#formControlsMsg", "error", msg !== "");
    formControlMsg.classList.remove("success");
  }

  render() {
    return (
      <div className="form-wrapper">
        <div id="formControlsMsg" className=""></div>
        <form
          id="formControlsForm"
          onReset={() => {
            this.resetForm();
          }}
          method="POST"
          onSubmit={(e) => {
            this.submit(e);
          }}
        >
          <p>*Indicates Required Field</p>
          <div className="form-controls">
            {this.domControls.map((c) => c && c.render && c.render())}
          </div>

          <div class="form-buttons">
            <button type="submit" aria-label="Submit">
              <span class="label">Submit</span>
            </button>
            <button type="reset">Reset</button>
          </div>
        </form>
      </div>
    );
  }
}

export default FormControl;
