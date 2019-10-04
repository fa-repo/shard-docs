import React from "react";
import Highlight, { defaultProps } from "prism-react-renderer";

export default ({ children, className, language }) => {
  language = language || className.replace(/language-/, "");

  return (
    <Highlight {...defaultProps} code={children.trim()} language={language} theme={null}>
      {({ className, tokens, getLineProps, getTokenProps }) => (
        <pre className={className}>
          <code>
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </code>
        </pre>
      )}
    </Highlight>
  );
};
