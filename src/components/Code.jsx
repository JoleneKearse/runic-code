import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { solarizedlight } from "react-syntax-highlighter/dist/esm/styles/prism";

const Code = ({ code }) => {
  const customStyle = {
    borderRadius: "0.5rem",
    backgroundColor: "#483C38",
  }
  return (
      <SyntaxHighlighter language="javascript" style={solarizedlight} customStyle={customStyle} showLineNumbers wrapLines>
        {code}
      </SyntaxHighlighter>
  )
}

export default Code