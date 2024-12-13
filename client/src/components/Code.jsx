import React from "react";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import javascript from "react-syntax-highlighter/dist/esm/languages/prism/javascript";
import { solarizedlight } from "react-syntax-highlighter/dist/esm/styles/prism";

SyntaxHighlighter.registerLanguage("javascript", javascript);

const Code = ({ code }) => {
  const customStyle = {
    borderRadius: "0.5rem",
    backgroundColor: "#483C38",
    maxWidth: "98%",
  };

  return (
    <SyntaxHighlighter
      language="javascript"
      style={solarizedlight}
      customStyle={customStyle}
      showLineNumbers
      wrapLines
    >
      {code}
    </SyntaxHighlighter>
  )
}

export default Code