import React from "react";
import { MemoryRouter } from "react-router-dom";
import { mount } from "enzyme";
import Sidebar from "./Sidebar";
import fromSource from "../adapters/fromSource";

describe("<Sidebar />", () => {
  test.todo("renders menu");
  test.todo("renders description");
  test.todo("renders sidebarFooter");
  test.todo("can hide sidebarFooter");
});

const title = "App title";
const description = "App description.";
const source = fromSource([
  { title: "Doc A", document: [ <h1>Doc A</h1> ] }
]);

describe("<Sidebar />", () => {
  const mountSidebar = ({title, description, source, showSidebarFooter } = {}) => {
    return mount(
      <MemoryRouter>
        <Sidebar
          title={title}
          description={description}
          source={source}
          showSidebarFooter={showSidebarFooter}
        />
      </MemoryRouter>
    )
  };

  it("renders without crashing", () => {
    const wrapper = mountSidebar();

    expect(wrapper.exists()).toBe(true);
  });

  it("renders app title", () => {
    const wrapper = mountSidebar({ title });

    expect(wrapper.find('.shard-docs-sidebar-heading').text()).toBe(title);
  });

  it("renders app description", () => {
    const wrapper = mountSidebar({ description });

    expect(wrapper.find('.shard-docs-sidebar-description').text()).toBe(description);
  });

  it("renders menu", () => {
    const wrapper = mountSidebar({ source });

    expect(wrapper.find('.shard-docs-sidebar-menu ul li').exists()).toBe(true);
  });

  it("renders sidebar footer", () => {
    const wrapper = mountSidebar();

    expect(wrapper.find('.shard-docs-sidebar-footer').exists()).toBe(true);
  });

  it("can hide sidebar footer", () => {
    const wrapper = mountSidebar({ showSidebarFooter: false });

    expect(wrapper.find('.shard-docs-sidebar-footer').exists()).toBe(false);
  });
});
