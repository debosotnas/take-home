export const FORM_CONTROL_TYPES = {
  TEXT_INPUT: "text-input",
  DROPDOWN_SELECT: "dropdown-select",
  CHECKBOX_GROUP: "check-group",
};

export const VALIDATION_TYPE = {
  NON_EMPTY: "non-empty",
  EMAIL: "email",
};

export const CONTROLS = [
  {
    id: "firstName",
    label: "first name",
    isRequired: true,
    error: "first name is required",
    type: FORM_CONTROL_TYPES.TEXT_INPUT,
    options: [],
    validation: VALIDATION_TYPE.NON_EMPTY,
  },
  {
    id: "lastName",
    label: "last name",
    isRequired: true,
    error: "last name is required",
    type: FORM_CONTROL_TYPES.TEXT_INPUT,
    options: [],
    validation: VALIDATION_TYPE.NON_EMPTY,
  },
  {
    id: "email",
    label: "email address",
    isRequired: true,
    error: "email is required",
    type: FORM_CONTROL_TYPES.TEXT_INPUT,
    options: [],
    validation: VALIDATION_TYPE.EMAIL,
  },
  {
    id: "org",
    label: "organization",
    type: FORM_CONTROL_TYPES.TEXT_INPUT,
    options: [],
  },
  {
    id: "euResident",
    label: "EU resident",
    isRequired: true,
    error: "EU Resident is required",
    type: FORM_CONTROL_TYPES.DROPDOWN_SELECT,
    options: [
      {
        label: "Yes",
        value: "Yes",
      },
      {
        label: "No",
        value: "No",
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
