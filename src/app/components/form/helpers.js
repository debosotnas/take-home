export const isValidEmail = (email) => {
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/email#validation
  const re =
    /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  return re.test(email);
};

export const docSel = (sel) => {
  return document.querySelector(sel);
};

export const docSelSwitch = (sel, className, val) => {
  const elem = docSel(sel);
  val ? elem.classList.add(className) : elem.classList.remove(className);
};
