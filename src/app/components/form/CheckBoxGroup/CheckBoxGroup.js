import { h } from "dom-chef";

const CheckBoxGroup = (props = {}) => {
  const opts = Array.isArray(props.options) ? props.options : [];
  const checkGroupName = `${props.id}[]`;
  return (
    <div
      className={
        props.error
          ? "form-input form-item-checkbox-group error"
          : "form-input form-item-checkbox-group"
      }
    >
      {props.error && <div className="error-caption">{props.error}</div>}
      <div className="control">
        {props.label && (
          <label>
            {props.label}
            {props.isRequired && "*"}
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
                />{" "}
                <label for={value}>{label}</label>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CheckBoxGroup;
