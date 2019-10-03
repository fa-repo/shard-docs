import React from "react";
import { mount } from "enzyme";
import Footer from "./Footer";

describe("<Footer />", () => {
  it("renders description", () => {
    const wrapper = mount(<Footer/>)
    expect(wrapper.find('Footer').exists()).toBe(true)
  });
});
