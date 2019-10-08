import React from "react";
import { MemoryRouter } from "react-router-dom";
import { mount } from "enzyme";
import ShardDocs from "./ShardDocs";

const title = "App title";
const description = "App description.";
const source = [{ title: "Doc A", document: <h1>Doc A</h1> }];

describe("<ShardDocs />", () => {
  const mountShardDocs = ({title, description, source, hideBuiltWithShardDocs}={}) => {
    return mount(
      <MemoryRouter>
        <ShardDocs
          title={title}
          description={description}
          source={source}
          hideBuiltWithShardDocs={hideBuiltWithShardDocs}
        />
      </MemoryRouter>
    )
  };

  it("renders without crashing", () => {
    const wrapper = mountShardDocs();

    expect(wrapper.exists()).toBe(true);
  });

  it("renders sidebar", () => {
    const wrapper = mountShardDocs();

    expect(wrapper.find('Sidebar').exists()).toBe(true);
  });

  it("renders app title", () => {
    const wrapper = mountShardDocs({ title });

    expect(wrapper.find('Sidebar .shard-docs-header-title h2').text()).toBe(title);
  });

  it("renders app description", () => {
    const wrapper = mountShardDocs({ description });

    expect(wrapper.find('Sidebar .shard-docs-description').text()).toBe(description);
  });

  it("renders menu", () => {
    const wrapper = mountShardDocs({ source });

    expect(wrapper.find('Sidebar .shard-docs-menu ul li').exists()).toBe(true);
  });

  it("renders sidebar footer", () => {
    const wrapper = mountShardDocs();

    expect(wrapper.find('Sidebar .shard-docs-built-with-shard-docs').exists()).toBe(true);
  });

  it("can hide sidebar footer", () => {
    const wrapper = mountShardDocs({ hideBuiltWithShardDocs: true });

    expect(wrapper.find('Sidebar .shard-docs-built-with-shard-docs').exists()).toBe(false);
  });

  it("renders main", () => {
    const wrapper = mountShardDocs();

    expect(wrapper.find('Main').exists()).toBe(true);
  });

  it("renders documents", () => {
    const wrapper = mountShardDocs({ source });

    expect(wrapper.find('Main Document').exists()).toBe(true);
  });
});
