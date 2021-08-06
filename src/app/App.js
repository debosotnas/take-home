import { h } from "dom-chef";
import {
  Box,
  FormControls,
  FormButtons,
  FORM_CONTROL_TYPES,
} from "./components/index.js";

const App = () => {
  const signUpValidator = (event) => {
    console.log("validate!!! --> event: ", event);
    event && event.preventDefault && event.preventDefault();
  };

  const controls = [
    {
      id: "firstName",
      label: "first name",
      isRequired: true,
      error: "first name is required",
      type: FORM_CONTROL_TYPES.TEXT_INPUT,
      options: [],
      validation: "string",
    },
    {
      id: "lastName",
      label: "last name",
      isRequired: true,
      error: "last name is required",
      type: FORM_CONTROL_TYPES.TEXT_INPUT,
      options: [],
      validation: "string",
    },
    {
      id: "email",
      label: "email address",
      isRequired: true,
      error: "email is required",
      type: FORM_CONTROL_TYPES.TEXT_INPUT,
      options: [],
      validation: "string",
    },
    {
      id: "organization",
      label: "organization",
      type: FORM_CONTROL_TYPES.TEXT_INPUT,
      options: [],
      validation: "string",
    },
    {
      id: "isEuResident",
      label: "EU resident",
      isRequired: true,
      error: "EU Resident is required",
      type: FORM_CONTROL_TYPES.DROPDOWN_SELECT,
      options: [
        {
          label: "Yes",
          value: "yes",
        },
        {
          label: "No",
          value: "no",
        },
      ],
    },
    {
      id: "channels",
      isRequired: 1,
      error: "At least one of these is required",
      type: FORM_CONTROL_TYPES.CHECKBOX_GROUP,
      options: [
        {
          label: "advances",
          value: "advances",
        },
        {
          label: "alerts",
          value: "alerts",
        },
        {
          label: "other communications",
          value: "other",
        },
      ],
    },
  ];

  const formControls = FormControls({
    controls,
  });

  const ctas = FormButtons();

  return (
    <Box className="container">
      <Box className="header">
        <div>
          <h1>Sign up for email updates</h1>
          <p>*Indicates Required Field</p>
        </div>
      </Box>
      <form
        method="POST"
        onSubmit={(e) => {
          signUpValidator(e);
        }}
      >
        {formControls}
        {ctas}
      </form>
    </Box>
  );
};

export default App;
