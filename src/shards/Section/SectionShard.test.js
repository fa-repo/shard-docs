import React from "react";
import { mount } from "enzyme";
import SectionShard from "./SectionShard";

const title = "Hello world"

describe("<SectionShard />", () => {
  it("renders without crashing", () => {
    const wrapper = mount(<SectionShard />)

    expect(wrapper.find('SectionShard').exists()).toBe(true)
  });

  it("renders title", () => {
    const wrapper = mount(<SectionShard title={title} />)

    expect(wrapper.find('.shard-docs-section-shard-title a').text()).toBe('Hello world')
  });

  it("renders body", () => {
    const wrapper = mount(
      <SectionShard>
        <h1>Hi</h1>
      </SectionShard>
    )

    expect(wrapper.find('.shard-docs-section-shard h1').text()).toBe('Hi')
  });

  it("can toggle body", () => {
    const wrapper = mount(
      <SectionShard title={title}>
        <h1>Hi</h1>
      </SectionShard>
    );

    expect(wrapper.find('.shard-docs-section-shard h1').exists()).toBe(true)

    wrapper.find('.shard-docs-section-shard-title a').simulate('click')

    expect(wrapper.find('.shard-docs-section-shard h1').exists()).toBe(false)
  });
});
