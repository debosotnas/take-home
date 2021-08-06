import { h } from "dom-chef";
import Box from "./Box.js";

const CustomBox = (props) => {
  Box.defaultProps = {
    ...(props || {}),
  };
  return Box;
};

export default CustomBox;
