import axios from "axios";

const fetchQuestions = async (options = {}) => {
  try {
    const response = await axios.get(
      process.env.NODE_ENV === "production"
        ? "https://runic-code-server.onrender.com/api/questions"
        : "http://localhost:5000/api/questions",
      options
    );
    return response.data;
  } catch (error) {
    return error.message;
  }
};

export default fetchQuestions;