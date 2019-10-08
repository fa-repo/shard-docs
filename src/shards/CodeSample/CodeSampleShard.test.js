import React from "react";
import { MemoryRouter } from "react-router-dom";
import { mount } from "enzyme";
import CodeSampleShard from "./CodeSampleShard";

const title = "Hello world";
const repository = "github.com"
const sourceCode = `
<HelloWorld />
`;

describe("<CodeSampleShard />", () => {
  it("renders without crashing", () => {
    const wrapper = mount(<CodeSampleShard />)
    expect(wrapper.find('CodeSampleShard').exists()).toBe(true)
  });

  it("renders title", () => {
    const wrapper = mount(<CodeSampleShard title={title} />)
    expect(wrapper.find('.code-sample-shard-header .title').text()).toBe('Hello world')
  });

  it("renders source code button when sourceCode provided", () => {
    const wrapper = mount(<CodeSampleShard sourceCode={sourceCode} />)
    expect(wrapper.find('.code-sample-shard-header menu .code').exists()).toBe(true)
  });

  it("hides source code button when sourceCode is empty", () => {
    const wrapper = mount(<CodeSampleShard />)
    expect(wrapper.find('.code-sample-shard-header menu .code').exists()).toBe(false)
  });

  it("renders repository anchor when repository provided", () => {
    const wrapper = mount(<CodeSampleShard repository={repository} />)

    expect(wrapper.find('.code-sample-shard-header a.repository').exists()).toBe(true)
    expect(wrapper.find('.code-sample-shard-header a.repository').props().href).toBe("github.com")
  });

  it("hides repository anchor when no repository is provided", () => {
    const wrapper = mount(<CodeSampleShard />)

    expect(wrapper.find('.code-sample-shard-header a.repository').exists()).toBe(false)
  });

  it("renders example", () => {
    const wrapper = mount(<CodeSampleShard><h1>Hello world</h1></CodeSampleShard>);

    expect(wrapper.find('.code-sample-shard-body h1').text()).toBe('Hello world')
  });

  it("can toggle sourceCode", () => {
    const wrapper = mount(<CodeSampleShard sourceCode={sourceCode} />);

    expect(wrapper.find('.code-sample-shard-body .code-sample-shard-source-code').exists()).toBe(false)

    wrapper.find('.code-sample-shard-header menu a.code').simulate('click')

    expect(wrapper.find('.code-sample-shard-body .code-sample-shard-source-code').exists()).toBe(true)
  });
});
