const BASE_URL = import.meta.env.VITE_API_URL;
import Cookies from "js-cookie";

export const signupUser = async (userData) => {
  const response = await fetch(`${BASE_URL}/auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });

  const data = await response.json();
  if (data.errors) {
    throw new Error(data.errors[0].msg);
  }
  if (!response.ok) {
    throw new Error(data.message || "Signup Failed");
  }
  Cookies.set("token", data.token, {expires:28});

  return data;
};
