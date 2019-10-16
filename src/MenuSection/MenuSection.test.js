import React from "react";
import { mount } from "enzyme";
import MenuSection from "./MenuSection";
import fromSource from "../adapters/fromSource";
import { MemoryRouter } from "react-router-dom";

let { tree } = fromSource([
  {
    title: "Essentials",
    folder: [{ title: "Get started", document: <h1>Get started</h1> }]
  },
  {
    title: "Examples",
    folder: [{ title: "Hello world", document: <h1>Hello world</h1> }]
  },
  { title: "Doc A", document: <h1>Doc A</h1> }
]);

test("<MenuSection /> renders first index correctly", () => {
  const onNavigateMock = jest.fn();
  const wrapper = mount(
    <MemoryRouter>
      <MenuSection index={0} node={tree[0]} onNavigate={onNavigateMock} />
    </MemoryRouter>
  );

  // first section is open by default
  expect(wrapper.find('MenuSectionHeader').exists()).toBe(true)
  expect(wrapper.find('MenuTree').exists()).toBe(true)

  // toggle closed, toggle open, toggle closed
  wrapper.find('MenuSectionHeader a').simulate('click')
  expect(wrapper.find('MenuTree').exists()).toBe(false)
  wrapper.find('MenuSectionHeader a').simulate('click')
  expect(wrapper.find('MenuTree').exists()).toBe(true)

  // calls onNavigate
  wrapper.find('MenuTree DocumentNode a').first().simulate('click')
  expect(onNavigateMock.mock.calls.length).toBe(1)
});

test("<MenuSection /> render indexes after first index correctly", () => {
  const wrapper = mount(
    <MemoryRouter>
      <MenuSection index={1} node={tree[1]} />
    </MemoryRouter>
  );

  // second section section is closed by default
  expect(wrapper.find('MenuSectionHeader').exists()).toBe(true)
  expect(wrapper.find('MenuTree').exists()).toBe(false)
});

test("<MenuSection /> renders without title correctly", () => {
  const wrapper = mount(
    <MemoryRouter>
      <MenuSection index={1} node={tree[2]} />
    </MemoryRouter>
  );

  expect(wrapper.find('MenuSectionHeader').exists()).toBe(false)
  expect(wrapper.find('MenuTree').exists()).toBe(true)
});

