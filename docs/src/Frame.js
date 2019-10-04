import React from "react";
import Frame from "react-frame-component";

/**
 * Frame
 */

const getStyles = () => {
  let head = "";
  const sheets = Array.from(document.querySelectorAll("link[rel=stylesheet]"));
  const styles = Array.from(document.querySelectorAll("head style"));

  sheets.forEach(link => {
    head += link.outerHTML;
  });

  styles.forEach(style => {
    head += style.outerHTML;
  });

  return head;
};

export default props => (
  <Frame
    initialContent={`<!DOCTYPE html><html><head>${getStyles()}</head><body><div class="frame-root"></div></body></html>`}
    style={{ width: "1200px", height: "400px", pointerEvents: "none" }}
  >
    {props.children}
  </Frame>
);
