import { h } from "dom-chef";
import "./FormControls.sass";
import TextField from "./TextField/TextField.js";
import DropDownSelect from "./DropDownSelect/DropDownSelect.js";
import CheckBoxGroup from "./CheckBoxGroup/CheckBoxGroup.js";
import { FORM_CONTROL_TYPES } from "./constants.js";

const FormControls = ({ controls = [] }) => {
  return (
    <div className="form-controls">
      {controls.map((props) => {
        switch (props.type) {
          case FORM_CONTROL_TYPES.TEXT_INPUT:
            return TextField({ ...props });
          case FORM_CONTROL_TYPES.DROPDOWN_SELECT:
            return DropDownSelect({ ...props });
          case FORM_CONTROL_TYPES.CHECKBOX_GROUP:
            return CheckBoxGroup({ ...props });
          default:
            return null;
        }
      })}
    </div>
  );
};

export default FormControls;
