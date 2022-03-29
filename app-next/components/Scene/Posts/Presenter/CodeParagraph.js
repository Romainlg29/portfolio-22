import { useContext } from "react";
import { CodeBlockContext } from "./CodeBlock";
import Hightlight, { defaultProps } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/vsDark";

const CodeParagraph = ({ tab, children }) => {
  const tabs = tab ? Array(tab * 2).fill(" ") : null;
  const lang = useContext(CodeBlockContext);

  const text = tabs ? `${tabs.join("")}${children}` : children;

  return (
    <Hightlight {...defaultProps} language={lang} code={text} theme={theme}>
      {
        ({ className, tokens, getLineProps, getTokenProps }) => (
          <pre className={className}>
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </pre>
        )
      }
    </Hightlight>
  );
};
export default CodeParagraph;