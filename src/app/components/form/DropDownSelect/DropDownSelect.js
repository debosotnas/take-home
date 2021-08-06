import { h } from "dom-chef";

const DropDownSelect = (props = {}) => {
  const opts = Array.isArray(props.options) ? props.options : [];
  return (
    <div
      className={
        props.error
          ? "form-input form-item-dropdown error"
          : "form-input form-item-dropdown"
      }
    >
      {props.error && <div className="error-caption">{props.error}</div>}
      <div className="control">
        <label for={props.id}>
          {props.label}
          {props.isRequired && "*"}
        </label>
        <select id={props.id} name={props.id}>
          <option value="select-one">- SELECT ONE -</option>
          {opts.map(({ value, label }) => {
            return <option value={value}>{label}</option>;
          })}
        </select>
      </div>
    </div>
  );
};

export default DropDownSelect;
