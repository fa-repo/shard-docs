import React from "react";
import { MemoryRouter } from "react-router-dom";
import { mount } from "enzyme";
import CodeExampleShard from "./CodeExampleShard";

const title = "Hello world";
const repository = "github.com"
const sourceCode = `
<HelloWorld />
`;

describe("<CodeExampleShard />", () => {
  it("renders without crashing", () => {
    const wrapper = mount(<CodeExampleShard />)
    expect(wrapper.find('CodeExampleShard').exists()).toBe(true)
  });

  it("renders title", () => {
    const wrapper = mount(<CodeExampleShard title={title} />)
    expect(wrapper.find('.code-example-shard-header .title').text()).toBe('Hello world')
  });

  it("renders source code button when sourceCode provided", () => {
    const wrapper = mount(<CodeExampleShard sourceCode={sourceCode} />)
    expect(wrapper.find('.code-example-shard-header menu .code').exists()).toBe(true)
  });

  it("hides source code button when sourceCode is empty", () => {
    const wrapper = mount(<CodeExampleShard />)
    expect(wrapper.find('.code-example-shard-header menu .code').exists()).toBe(false)
  });

  it("renders repository anchor when repository provided", () => {
    const wrapper = mount(<CodeExampleShard repository={repository} />)

    expect(wrapper.find('.code-example-shard-header a.repository').exists()).toBe(true)
    expect(wrapper.find('.code-example-shard-header a.repository').props().href).toBe("github.com")
  });

  it("hides repository anchor when no repository is provided", () => {
    const wrapper = mount(<CodeExampleShard />)

    expect(wrapper.find('.code-example-shard-header a.repository').exists()).toBe(false)
  });

  it("renders example", () => {
    const wrapper = mount(<CodeExampleShard><h1>Hello world</h1></CodeExampleShard>);

    expect(wrapper.find('.code-example-shard-body h1').text()).toBe('Hello world')
  });

  it("can toggle sourceCode", () => {
    const wrapper = mount(<CodeExampleShard sourceCode={sourceCode} />);

    expect(wrapper.find('.code-example-shard-body .code-example-shard-source-code').exists()).toBe(false)

    wrapper.find('.code-example-shard-header menu a.code').simulate('click')

    expect(wrapper.find('.code-example-shard-body .code-example-shard-source-code').exists()).toBe(true)
  });
});
