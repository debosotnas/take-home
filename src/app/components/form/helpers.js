export const isValidEmail = (email) => {
  const re =
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  return re.test(email);
};

export const docSel = (sel) => {
  return document.querySelector(sel);
};

export const docSelSwitch = (sel, className, val) => {
  const elem = docSel(sel);
  val ? elem.classList.add(className) : elem.classList.remove(className);
};
