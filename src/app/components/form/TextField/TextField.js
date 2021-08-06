import { h } from "dom-chef";

const TextField = (props = {}) => {
  return (
    <div
      className={
        props.error ? "form-input form-item error" : "form-input form-item"
      }
    >
      {props.error && <div className="error-caption">{props.error}</div>}
      <div className="control">
        <label for={props.id}>
          {props.label}
          {props.isRequired && "*"}
        </label>
        <input type="text" name={props.id} id={props.id} />
      </div>
    </div>
  );
};

export default TextField;
