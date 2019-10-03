import React from "react";
import { mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import MenuList from "./MenuList";
import fromSource from "../adapters/fromSource";

const items = fromSource([
  { title: "Doc A", document: [] },
  { title: "Doc B", document: [] },
  { title: "Doc C", document: [] },
  {
    title: "Folder",
    children: [{ title: "Doc D", document: [] }, { title: "Doc E", document: [] }]
  },
  { title: "Github", externalLink: "http://github.com" }
]);

describe("<MenuList />", () => {
  const mountMenuList = ({ items } = {}) => {
    const onNavigate = jest.fn();
    const wrapper = mount(
      <MemoryRouter>
        <MenuList onNavigate={onNavigate} items={items} />
      </MemoryRouter>
    );

    return { wrapper, onNavigate }
  }

  it("renders without crashing", () => {
    const { wrapper } = mountMenuList();

    expect(wrapper.exists()).toBe(true)
  });

  it("renders group", () => {
    const { wrapper } = mountMenuList({ items });

    expect(wrapper.find('MenuList > GroupNode').at(1).find('li').first().text()).toBe('Folder')
    expect(wrapper.find('MenuList > GroupNode').at(1).find('li').length).toBe(3)
  });

  it("renders discrete group", () => {
    const { wrapper } = mountMenuList({ items });

    expect(wrapper.find('MenuList > GroupNode').at(0).find('li').length).toBe(3)
  });

  it("renders external item", () => {
    const { wrapper } = mountMenuList({ items });

    expect(wrapper.find('MenuList > GroupNode').at(2).find('li a').props().href).toBe('http://github.com')
    expect(wrapper.find('MenuList > GroupNode').at(2).find('li a').text()).toBe('Github ')
  });

  it("renders document item", () => {
    const { wrapper } = mountMenuList({ items });

    expect(wrapper.find('MenuList > GroupNode').at(0).find('li a').first().text()).toBe('Doc A')
    expect(wrapper.find('MenuList > GroupNode').at(0).find('li a').first().props().href).toBe('/doc-a')
  });

  it("calls onNavigate", () => {
    const { wrapper, onNavigate } = mountMenuList({ items });

    wrapper.find('MenuList ul li a').first().simulate('click');

    expect(onNavigate.mock.calls.length).toBe(1)
  });
});