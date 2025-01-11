const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 5000;
const { shuffleArray } = require("./utils");
const questions = require("./questions");

app.use(cors({ origin: "*" }));

app.get("/api/questions", async (req, res) => {
	try {
		const shuffledQuestions = shuffleArray(questions).slice(0, 10);
		res.json(shuffledQuestions);
	} catch {
		console.error("Uh-oh - the enemy intercepted the questions!");
		res.status(500).json({ error: "Failed to fetch questions" });
	}
});

app.listen(PORT, () => {
	console.log(`Server listening at http://localhost:${PORT}/api/questions`);
});
