import React from "react";
import { mount } from "enzyme";
import IframeShard from "./IframeShard";

describe("<IframeShard />", () => {
  it("renders without crashing", () => {
    const wrapper = mount(<IframeShard />)
    expect(wrapper.find('IframeShard').exists()).toBe(true)
  });
});
