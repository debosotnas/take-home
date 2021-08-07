import "regenerator-runtime/runtime";
import { API_SUBSCRIBE_URL } from "./constants";

const testFetchSuccess = true;
const testFetchDelay = 2000;

export const mockFetch = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        status: 200,
        json: () =>
          testFetchSuccess
            ? {
                status: "success",
                message: "Thank you. You are now subscribed.",
              }
            : {
                status: "error",
                message: "Invalid Subscription request.",
              },
      });
    }, testFetchDelay);
  });
};

export const makeSignUp = async (payload) => {
  const options = {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(payload),
  };
  return await mockFetch(API_SUBSCRIBE_URL, options);
};
