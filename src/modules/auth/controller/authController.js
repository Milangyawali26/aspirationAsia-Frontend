// src/api/auth.js

import toast from "react-hot-toast";
import { API_URL } from "../../../common/base_api_service";

/**
 * Handles user login via fetch and stores token (trimmed Bearer).
 */
export const handleLogin = async (credentials) => {
  console.log("Validated Credentials:", credentials);
  try {
    const response = await fetch(`${API_URL}user/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`Error: ${errorData.message || "Something went wrong"}`);
    }

    const authHeader = response.headers.get("authorization");
    if (authHeader && authHeader.startsWith("Bearer ")) {
      const token = authHeader.split(" ")[1]; // Remove "Bearer "
      localStorage.setItem("authToken", token);
      console.log("Token:", token);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error logging in:", error.message);
    toast.error("error logging in", error.message || "Login failed");
    throw error;
  }
};

/**
 * Handles login submission from the UI layer.
 */
export const submitLogin = async ({
  values,
  // rememberMe,
  navigate,
}) => {
  // if (rememberMe) {
  //   localStorage.setItem("rememberedEmail", values.username);
  // }

  try {
    console.log("Sent credentials:", values.username, values.password);
    const data = await handleLogin(values);

    toast.success("Login successful!");
    console.log(data.message);
    console.log(data.data);

    localStorage.setItem(
      "authenticated user's data",
      JSON.stringify(data.data)
    );

    setTimeout(() => {
      navigate("/dashboard");
    }, 500);

    return data;
  } catch (err) {
    console.error("Login failed:", err);
    toast.error("error hee", err.message || "Login failed");
    throw err;
  }
};

export const handleLogout = (navigate) => {
  // Clear user data from localStorage
  localStorage.removeItem("authenticated user's data");
  localStorage.removeItem("authToken");

  // Navigate to login page
  navigate("/login");
};
