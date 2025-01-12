import axios from "axios";

const fetchQuestions = async () => {
  try {
    const response = await axios.get(
      process.env.NODE_ENV === "production"
        ? "https://runic-code-server.onrender.com/api/questions"
        : "http://localhost:5000/api/questions"
    );
    return response.data;
  } catch (error) {
    return error.message;
  }
};

export default fetchQuestions;