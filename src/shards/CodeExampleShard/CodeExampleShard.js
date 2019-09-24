import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import parseMarkdown from "../lib/parseMarkdown";
import "./CodeExampleShard.scss";
import GithubIcon from "./GithubIcon";
import CodeIcon from "./CodeIcon";
import uniqid from "uniqid";

/**
 * CodeExampleShard
 */

class CodeExampleShard extends React.Component {
  static propTypes = {
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    lang: PropTypes.string,
    sourceCode: PropTypes.string,
    repository: PropTypes.string
  };

  static defaultProps = {
    title: "",
    lang: "jsx",
    sourceCode: "",
    repository: ""
  };

  state = {
    displayCode: false,
    id: uniqid()
  };

  toggleCode = () => this.setState({ displayCode: !this.state.displayCode });

  getSourceCode = () => {
    const { sourceCode, lang } = this.props;
    if (sourceCode) {
      return `\`\`\`${lang}\n${sourceCode.trim()}\n\`\`\``;
    } else {
      return null;
    }
  };

  handleToggleCode = e => {
    e.preventDefault();
    this.toggleCode();
  };

  render() {
    const { title, repository } = this.props;
    const sourceCode = this.getSourceCode();
    const className = classnames("shard-docs-code-example-shard", this.props.className);
    const showHeader = title || sourceCode || repository;
    const displayCode = this.state.displayCode;

    return (
      <div className={className}>
        {showHeader && (
          <header className="shard-docs-code-example-shard-header">
            <h3 className="shard-docs-code-example-shard-title" title={title}>
              {title}
            </h3>
            <menu>
              <a className="code" href="#" onClick={this.handleToggleCode}>
                <CodeIcon />
              </a>
              {repository && (
                <a className="repository" href={repository} target="_blank">
                  <GithubIcon />
                </a>
              )}
            </menu>
          </header>
        )}

        {displayCode && <footer dangerouslySetInnerHTML={{ __html: parseMarkdown(sourceCode) }} />}

        {this.props.children && (
          <div>
            <this.props.children.type {...this.props.children.props} key={this.state.id} />
          </div>
        )}
      </div>
    );
  }
}

export default CodeExampleShard;
