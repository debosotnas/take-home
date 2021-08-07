import "regenerator-runtime/runtime";
import { ERRORS } from "../../strings.js";
import { RESPONSE_STATUS } from "./constants.js";
import { makeSignUp } from "./api.js";
import {
  NetworkError,
  InvalidSubscriptionError,
  UnknownSubscriptionError,
} from "./Errors.js";

export const submitSignUp = async (payload) => {
  const response = await makeSignUp(payload);
  if (response.status === 200) {
    const data = await response.json();
    if (data.status === RESPONSE_STATUS.SUCCESS) {
      return {
        msg: data.message,
      };
    } else if (data.status === RESPONSE_STATUS.ERROR) {
      throw new InvalidSubscriptionError(data.message);
    } else {
      throw new UnknownSubscriptionError(ERRORS.Unknown);
    }
  } else {
    throw new NetworkError(ERRORS.Network);
  }
};
