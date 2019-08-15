import React from "react";
import MarkdownShard from "@fa-repo/shard-docs/dist/shards/markdown-shard";
import getStartedMarkdown from "./get-started.md";

/**
 * Get started page
 */

const GetStartedPage = [<MarkdownShard markdown={getStartedMarkdown} />];

GetStartedPage.propTypes = {};
GetStartedPage.defaultProps = {};

export default GetStartedPage;
