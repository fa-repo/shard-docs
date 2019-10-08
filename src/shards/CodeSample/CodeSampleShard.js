import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import CodeIcon from "boxicons/svg/regular/bx-code.svg";
import GithubIcon from "boxicons/svg/logos/bxl-github.svg";
import isArray from "lodash/isArray";
import uniqid from "uniqid";
import CodeBlock from "../../renderers/CodeBlock";
import BaseLink from "@fa-repo/base-react/dist/link";
import Frame from "react-frame-component";
import "./CodeSampleShard.scss";

/**
 * CodeSampleShard
 */

class CodeSampleShard extends React.Component {
  static propTypes = {
    title: PropTypes.string,
    lang: PropTypes.string,
    sourceCode: PropTypes.string,
    repository: PropTypes.string,
    useIframe: PropTypes.bool,
    iframeHead: PropTypes.string,
    iframeStyle: PropTypes.object
  };

  static defaultProps = {
    title: "",
    lang: "jsx",
    sourceCode: "",
    repository: "",
    useIframe: false,
    iframeHead: "",
    iframeStyle: {}
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
    const { title, repository, sourceCode, lang, useIframe, iframeHead, iframeStyle } = this.props;
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
      <section className={classnames("code-sample-shard", this.props.className)}>
        {showHeader && (
          <header className="code-sample-shard-header">
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
        <div className="code-sample-shard-body">
          {displayCode && (
            <div className="code-sample-shard-source-code">
              <CodeBlock language={lang}>{sourceCode}</CodeBlock>
            </div>
          )}
          <div className="code-sample-shard-example">
            {useIframe ? (
              <Frame
                initialContent={`<!DOCTYPE html><html><head>${iframeHead}</head><body><div class="frame-root"></div></body></html>`}
                style={iframeStyle}
              >
                {children}
              </Frame>
            ) : (
              children
            )}
          </div>
        </div>
      </section>
    );
  }
}

export default CodeSampleShard;
