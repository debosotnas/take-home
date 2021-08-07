import { h } from "dom-chef";
import { Box, FormControl } from "./components/index.js";

const App = () => {
  const formControl = new FormControl();

  return (
    <Box className="container">
      <Box className="header">
        <div>
          <h1>Sign up for email updates</h1>
        </div>
      </Box>
      {formControl.render()}
    </Box>
  );
};

export default App;
