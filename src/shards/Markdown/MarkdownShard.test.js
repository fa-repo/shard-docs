import React from "react";
import { mount } from "enzyme";
import MarkdownShard from "./MarkdownShard";

describe("<MarkdownShard />", () => {
  it("renders without crashing", () => {
    const wrapper = mount(<MarkdownShard />)
    expect(wrapper.find('MarkdownShard').exists()).toBe(true)
  });
});
