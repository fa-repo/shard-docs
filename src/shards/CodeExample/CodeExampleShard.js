import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import CodeIcon from "boxicons/svg/regular/bx-code.svg";
import GithubIcon from "boxicons/svg/logos/bxl-github.svg";
import isArray from "lodash/isArray";
import uniqid from "uniqid";
import CodeBlock from "../../renderers/CodeBlock";
import BaseLink from "@fa-repo/base-react/dist/link";
import "./CodeExampleShard.scss";

/**
 * CodeExampleShard
 */

class CodeExampleShard extends React.Component {
  static propTypes = {
    title: PropTypes.string,
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

  handleToggleCode = e => {
    e.preventDefault();
    this.toggleCode();
  };

  render() {
    const { title, repository } = this.props;
    const showHeader = title || sourceCode || repository;
    const displayCode = this.state.displayCode;
    let children = this.props.children;
    if (children) {
      children = isArray(children) ? (
        children.map((child, i) => <child.type {...child.props} key={this.state.id + i} />)
      ) : (
        <children.type {...children.props} key={this.state.id} />
      );
    }

    return (
      <section className={classnames("code-example-shard", this.props.className)}>
        {showHeader && (
          <header className="code-example-shard-header">
            <h3 className="title" title={title}>
              {title}
            </h3>
            <menu>
              <BaseLink className="code" preventDefault onClick={this.toggleCode}>
                <CodeIcon />
              </BaseLink>

              {repository && (
                <BaseLink className="repository" href={repository} newTab>
                  <GithubIcon />
                </BaseLink>
              )}
            </menu>
          </header>
        )}
        <div className="code-example-shard-body">
          {displayCode && (
            <div className="source-code">
              <CodeBlock language={this.props.lang}>{this.props.sourceCode}</CodeBlock>
            </div>
          )}
          <div className="example">{children}</div>
        </div>
      </section>
    );
  }
}

export default CodeExampleShard;
