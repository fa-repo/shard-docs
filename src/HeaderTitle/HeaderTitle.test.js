import React from "react";
import { mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import HeaderTitle from "./HeaderTitle";

describe("<HeaderTitle />", () => {
  it("renders without crashing", () => {
    const wrapper = mount(
      <MemoryRouter>
        <HeaderTitle/>
      </MemoryRouter>
    );

    expect(wrapper.find('.shard-docs-header-title').exists()).toBe(true)
  });

  it("renders title", () => {
    const wrapper = mount(
      <MemoryRouter>
        <HeaderTitle title="Hello world"/>
      </MemoryRouter>
    );

    expect(wrapper.find('.shard-docs-header-title h2').text()).toBe("Hello world")
    expect(wrapper.find('a.shard-docs-header-title').props().href).toBe("/")
  });

  it("renders link with custom path", () => {
    const wrapper = mount(
      <MemoryRouter>
        <HeaderTitle title="Hello world" path="/docs"/>
      </MemoryRouter>
    );

    expect(wrapper.find('.shard-docs-header-title h2').text()).toBe("Hello world")
    expect(wrapper.find('a.shard-docs-header-title').props().href).toBe("/docs")
  });
});
