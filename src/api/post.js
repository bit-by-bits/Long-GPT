import axios from 'axios';

const apiUrl = 'https://api-v2.longshot.ai/custom/api/generate/instruct';
const token = 'Bearer 4b9811114bc00b8d0fe5c529aa472fb78278ced4';

const generateContent = async (text) => {
  try {
    const payload = {
      text: text,
    };

    const headers = {
      'Content-Type': 'application/json',
      Authorization: token,
    };

    const response = await axios.post(apiUrl, payload, { headers });
    const responseData = response.data;

    if (responseData.status === 'success') {
      return {
        content: responseData.copies[0].content,
        citations: responseData.citations,
        message: responseData.message,
      };
    } else {
      throw new Error(responseData.message || 'Failed to generate content');
    }
  } catch (error) {
    throw new Error('Failed to fetch data');
  }
};

export default generateContent;
