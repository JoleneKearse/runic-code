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

### Signal Chosen Choice

I wanted to visual signally which multiple choice the user selects. I accomplished this in my `MultipleChoice` component.

```javascript
button.forEach((btn, btnIndex) => {
  if (btnIndex === index) {
    btn.classList.add("bg-neutral-900");
  } else {
    btn.classList.add("bg-neutral-800");
  }
});
```

I wanted to change all choices back to the default color when the "Cast Answer" button in `QuestionContainer` was clicked.

Originally, I tried
```javascript
const button = document.querySelectorAll(".bg-neutral-900");
button.classList.remove("bg-neutral-900");
button.classList.add("bg-neutral-800");
```
but this component doesn't have access to `MulitpleChoice`'s buttons.

I realized `useEffect` is for handling side effects, so:
```javascript
useEffect(() => {
  const button = document.querySelectorAll(".bg-neutral-800");
  button.forEach((btn) => {
    btn.classList.remove("bg-neutral-900");
    btn.classList.add("bg-neutral-800");
  });
}, [currentQuestion])
```


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