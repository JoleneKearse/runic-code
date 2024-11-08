# Runic Code

## Project Preview

**Runic Code** is a **Viking-themed JavaScript DSA quiz game**, because I *correctly* saw the high market demand! ⚔️

Reading code and identifying it's purpose is a valuable skill, but isn't often taught.  Until they starting working with teams and doing code reviews, self-taught devs often don't get the chance to bolster this skill.

I took [Codewars](https://www.codewars.com/) katas I'd personally completed, tossed them up on screen and provided multiple choice questions explaining their purpose.  

This app gives users the opportunity to read, digest, and choose the meaning of JavaScript DSA solutions.

## MVP

- Users arrive on the landing page with a cryptic, and slightly less cryptic, description of the quiz, hopefully preparing them for the Viking turns of phrases used throughout.
- Once they decide to "*battle*", 10 questions appear one-by-one.
- Each question is a **JavaScript** function that they should work at understanding.
- They get four possible answers and can only choose one.
- They submit, or *Cast*, each answer, until all are complete.
- The button changes to *Claim my plunder!* to go to the ResultsPage.
- They get their score, scroll through each question displaying the correct choice and, if they missed, the incorrect answer.
- They can click the *Return to the battlefield* button to restart the quiz.

## Extras

### 1
I decided to use [React Router](https://reactrouter.com/en/main) to simplify the app flow.  Going from the `HomePage` to `QuizPage` and `ResultsPage`, where each question was conditionally rendered.

### 2
I used [react-syntax-highlighter](https://www.npmjs.com/package/react-syntax-highlighter) to display code snippets with syntax color highlighting.  This library has great options like applying: 
- themes
- line numbers,
- wrapping lines, and
- custom styles.

The last was great as *solarized* looked fantastic, but I could apply a background colour from my Tailwind config.  

```javascript
const customStyle = {
  borderRadius: "0.5rem",
  backgroundColor: "#483C38",
};

<SyntaxHighlighter
  language="javascript"
  style={solarizedlight}
  customStyle={customStyle}
  showLineNumbers wrapLines
>
```

### 3
And, lastly, I ran pell-mell with the Viking theme.  I even tried to craft all my commit messages in Viking-inspired language!  I named all the functions and buttons accordingly. *We all get our fun in in different ways!* 🤷‍♀️

## Challenges Solved

### Allow only one choice

I tackled this challenge after getting the main functionality working.  I know people often second guess their choices, so it was important to only include one choice per question in the `userChoices` state and update the button color to avoid confusion.

I decided to keep track using a `selectedChoice` state, which I could set on each button click in the `MultipleChoice` component.

I needed to update this code, which sets the `userChoice` immediately:

```javascript
setUserChoices((prev) => [...prev, index]);
```

This copies the `userChoice` array, then places the last choice in. No matter how many times the user changes their mind, each click overwrites the last.
```javascript
setUserChoices((prev) => {
  const newChoice = [...prev];
  newChoice[currentQuestion] = index;
  return newChoice;
});
```

From here, I could easily reuse `selectedChoice` to change the background color on button click.

```javascript
selectedChoice === index ? "bg-neutral-900" : "bg-neutral-800";
```

*But there was a problem...*



## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js**: [Download Node.js](https://nodejs.org/) (version 14 or higher recommended)
- **pnpm**: Preferred package manager for this project. [Install pnpm](https://pnpm.io/installation)

### Installation

1. Clone the repository:
```bash
git clone git@github.com:JoleneKearse/runic-code.git
```
2. Navigate to the project folder:
```bash
cd yourproject
  ```

3. Run the following command to install project dependencies:
```bash
pnpm install
```
4. Start the development server:
```bash
pnpm run dev
```
The application should now be running at `http://localhost:5173`.