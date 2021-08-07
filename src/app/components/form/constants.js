import { FORM_CONTROLS } from "../../strings";

const Controls = FORM_CONTROLS.Controls;

export const FORM_CONTROL_TYPES = {
  TEXT_INPUT: "text-input",
  DROPDOWN_SELECT: "dropdown-select",
  CHECKBOX_GROUP: "check-group",
};

export const VALIDATION_TYPE = {
  NON_EMPTY: "non-empty",
  EMAIL: "email",
};

export const RESPONSE_STATUS = {
  SUCCESS: "success",
  ERROR: "error",
};

export const CONTROLS = [
  {
    id: "firstName",
    label: Controls.FirstName.Label,
    isRequired: true,
    error: Controls.FirstName.Error,
    type: FORM_CONTROL_TYPES.TEXT_INPUT,
    options: [],
    validation: VALIDATION_TYPE.NON_EMPTY,
  },
  {
    id: "lastName",
    label: Controls.LastName.Label,
    isRequired: true,
    error: Controls.LastName.Error,
    type: FORM_CONTROL_TYPES.TEXT_INPUT,
    options: [],
    validation: VALIDATION_TYPE.NON_EMPTY,
  },
  {
    id: "email",
    label: Controls.Email.Label,
    isRequired: true,
    error: Controls.Email.Error,
    type: FORM_CONTROL_TYPES.TEXT_INPUT,
    options: [],
    validation: VALIDATION_TYPE.EMAIL,
  },
  {
    id: "org",
    label: Controls.Organization.Label,
    type: FORM_CONTROL_TYPES.TEXT_INPUT,
    options: [],
  },
  {
    id: "euResident",
    label: Controls.EUResident.Label,
    isRequired: true,
    error: Controls.EUResident.Error,
    type: FORM_CONTROL_TYPES.DROPDOWN_SELECT,
    options: [
      {
        label: Controls.EUResident.OptionYes,
        value: Controls.EUResident.OptionYes,
      },
      {
        label: Controls.EUResident.OptionNo,
        value: Controls.EUResident.OptionNo,
      },
    ],
  },
  {
    id: "channels",
    isRequired: 1,
    error: Controls.Channels.Error,
    type: FORM_CONTROL_TYPES.CHECKBOX_GROUP,
    options: [
      {
        label: Controls.Channels.Options.Advances,
        value: Controls.Channels.Options.Advances,
      },
      {
        label: Controls.Channels.Options.Alerts,
        value: Controls.Channels.Options.Alerts,
      },
      {
        label: Controls.Channels.Options.OtherLabel,
        value: Controls.Channels.Options.OtherValue,
      },
    ],
  },
];

export const API_SUBSCRIBE_URL = "http://api.hero-take-home.com/subscribe";
