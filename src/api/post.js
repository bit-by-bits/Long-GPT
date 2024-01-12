import axios from "axios";

const API_URL = "https://api-v2.longshot.ai/custom/api/generate/instruct";
const AUTH_TOKEN = "Bearer 4b9811114bc00b8d0fe5c529aa472fb78278ced4";

const generateContent = async text => {
  try {
    const payload = { text };
    const headers = {
      "Content-Type": "application/json",
      Authorization: AUTH_TOKEN,
    };

    const response = await axios.post(API_URL, payload, { headers });
    const responseData = response.data;

    if (responseData.status === "success") {
      return {
        citations: responseData.citations,
        content: responseData.copies[0].content,
        message: responseData.message,
      };
    } else {
      throw new Error(responseData.message || "Failed to generate content");
    }
  } catch (error) {
    throw new Error("Failed to fetch data");
  }
};

export default generateContent;
