import React from "react";
import { mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import Header from "./Header";

describe("<Header />", () => {
  it("renders without crashing", () => {
    const wrapper = mount(<Header/>)

    expect(wrapper.find('.shard-docs-sidebar-header').exists()).toBe(true)
  });

  it("renders title", () => {
    const wrapper = mount(
      <MemoryRouter>
        <Header title="Hello world"/>
      </MemoryRouter>
    );

    expect(wrapper.find('.shard-docs-sidebar-title h2').text()).toBe("Hello world")
  });

  it("renders header link with custom basePath", () => {
    const wrapper = mount(
      <MemoryRouter>
        <Header title="Hello world" basePath="/docs"/>
      </MemoryRouter>
    );

    expect(wrapper.find('.shard-docs-sidebar-header a').props().href).toBe("/docs")
    expect(wrapper.find('.shard-docs-sidebar-header').text()).toBe("Hello world")
  });

  it("renders toggle button", () => {
    const wrapper = mount(<Header />);

    expect(wrapper.find('.shard-docs-sidebar-toggle').exists()).toBe(true)
  });

  it("calls onToggleMenu when sidebar toggle button clicked", () => {
    const onToggleMenu = jest.fn();
    const wrapper = mount(<Header onToggleMenu={onToggleMenu} />)

    wrapper.find('.shard-docs-sidebar-toggle').simulate('click')

    expect(onToggleMenu.mock.calls[0].length).toBe(1)
  });
});
