export const TITLES = {
  SignUp: "Sign up for email updates",
  RequiredField: "*Indicates Required Field",
};

export const ERRORS = {
  Unknown:
    "There was an error processing your subscription. Please try again later",
  Network: "There was an error during submit your info. Please try again",
};

export const CTAS = {
  Submit: "Submit",
  Reset: "Reset",
};

export const FORM_CONTROLS = {
  CommunicationChannels: "communication channels",
  SelectOne: "- SELECT ONE -",
  Controls: {
    FirstName: {
      Label: "first name",
      Error: "first name is required",
    },
    LastName: {
      Label: "last name",
      Error: "last name is required",
    },
    Email: {
      Label: "email address",
      Error: "email is required",
    },
    Organization: {
      Label: "organization",
    },
    EUResident: {
      Label: "EU resident",
      Error: "EU Resident is required",
      OptionYes: "Yes",
      OptionNo: "No",
    },
    Channels: {
      Error: "At least one of these is required",
      Options: {
        Advances: "advances",
        Alerts: "alerts",
        OtherLabel: "other communications",
        OtherValue: "other",
      },
    },
  },
};
