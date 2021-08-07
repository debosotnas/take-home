import "regenerator-runtime/runtime";
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
    if (data.status === "success") {
      return {
        msg: data.message,
      };
    } else if (data.status === "error") {
      throw new InvalidSubscriptionError(data.message);
    } else {
      throw new UnknownSubscriptionError(
        "There was an error processing your subscription. Please try again later"
      );
    }
  } else {
    throw new NetworkError(
      "There was an error during submit your info. Please try again"
    );
  }
};
