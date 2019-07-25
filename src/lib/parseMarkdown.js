import MarkdownIt from "markdown-it";
import markdownItTocAndAnchor from "markdown-it-toc-and-anchor";
import Prism from "./prism";

let markdownParser = new MarkdownIt("default", {
  html: true,
  highlight: function(str, lang) {
    try {
      return Prism.highlight(str, Prism.languages[lang]);
    } catch (error) {}
    return ""; // use external default escaping
  }
}).use(markdownItTocAndAnchor, { anchorLink: false });

export default markdown => markdownParser.render(markdown || "");
