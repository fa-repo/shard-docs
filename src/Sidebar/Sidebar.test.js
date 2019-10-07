import React from "react";
import { MemoryRouter } from "react-router-dom";
import { mount } from "enzyme";
import Sidebar from "./Sidebar";
import fromSource from "../adapters/fromSource";

const title = "App title";
const description = "App description.";
const { tree } = fromSource([
  { title: "Doc A", document: <h1>Doc A</h1> }
]);

describe("<Sidebar />", () => {
  const mountSidebar = ({ app, tree, hideBuiltWithShardDocs } = {}) => {
    return mount(
      <MemoryRouter>
        <Sidebar
          app={app}
          tree={tree}
          hideBuiltWithShardDocs={hideBuiltWithShardDocs}
        />
      </MemoryRouter>
    )
  };

  it("renders without crashing", () => {
    const wrapper = mountSidebar();

    expect(wrapper.exists()).toBe(true);
  });

  it("renders app title", () => {
    const app = { title };
    const wrapper = mountSidebar({ app });

    expect(wrapper.find('.shard-docs-sidebar-title h2').text()).toBe(title);
  });

  it("renders app description", () => {
    const app = { description };
    const wrapper = mountSidebar({ app });

    expect(wrapper.find('.shard-docs-sidebar-description').text()).toBe(description);
  });

  it("renders menu", () => {
    const wrapper = mountSidebar({ tree });

    expect(wrapper.find('.shard-docs-menu ul li').exists()).toBe(true);
  });

  it("renders sidebar footer", () => {
    const wrapper = mountSidebar();

    expect(wrapper.find('.shard-docs-built-with').exists()).toBe(true);
  });

  it("can hide sidebar footer", () => {
    const wrapper = mountSidebar({ hideBuiltWithShardDocs: true });

    expect(wrapper.find('.shard-docs-built-with').exists()).toBe(false);
  });
});
