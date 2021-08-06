export default class ControlBase {
  constructor(props) {
    this.props = props;
    this.initialProps = { ...props };
    this.hasErrors = false;
    this.formItemWrapperId = `${this.props.type}-${this.props.id}`;
  }

  onValueUpdate(evt) {
    this.props.value = evt?.target?.value || "";
    this.hasErrors && this.isValid();
  }

  getData() {
    return { [this.props.id]: this.props.value };
  }

  reset(resetValue = "") {
    this.props.value = this.initialProps.value
      ? this.initialProps.value
      : resetValue;
    this.hasErrors = false;
    this.updateAfterValidate();
  }

  updateAfterValidate() {
    const wrapper = document.querySelector(`#${this.formItemWrapperId}`);
    this.hasErrors
      ? wrapper.classList.add("error")
      : wrapper.classList.remove("error");
  }
}
