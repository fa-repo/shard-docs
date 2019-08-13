import { Remarkable } from "remarkable";
import Prism from "./prism";

var md = new Remarkable({
  html: true, // Enable HTML tags in source
  breaks: true, // Convert '\n' in paragraphs into <br>
  langPrefix: "language-", // CSS language prefix for fenced blocks

  // Highlighter function. Should return escaped HTML,
  // or '' if the source string is not changed
  highlight: function(str, lang) {
    try {
      return Prism.highlight(str, Prism.languages[lang]);
    } catch (error) {}
    return ""; // use external default escaping
  }
});

export default markdown => md.render(markdown || "");
