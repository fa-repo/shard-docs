import React from "react";
import { mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import MenuTree from "./MenuTree";
import fromSource from "../adapters/fromSource";

const { tree } = fromSource([
  { title: "Doc A", document: [] },
  { title: "Doc B", document: [] },
  { title: "Doc C", document: [] },
  {
    title: "Folder",
    folder: [{ title: "Doc D", document: [] }, { title: "Doc E", document: [] }]
  },
  { title: "Github", externalLink: "http://github.com" }
]);

describe("<MenuTree />", () => {
  const mountMenuList = ({ tree } = {}) => {
    const onNavigate = jest.fn();
    const wrapper = mount(
      <MemoryRouter>
        <MenuTree onNavigate={onNavigate} tree={tree} />
      </MemoryRouter>
    );

    return { wrapper, onNavigate }
  }

  it("renders without crashing", () => {
    const { wrapper } = mountMenuList();

    expect(wrapper.exists()).toBe(true)
  });

  it("renders folder", () => {
    const { wrapper } = mountMenuList({ tree });

    expect(wrapper.find('MenuTree > FolderNode').at(1).find('a').first().text()).toBe('Folder')
    expect(wrapper.find('MenuTree > FolderNode').at(1).find('a').length).toBe(3)
  });

  it("renders discrete group", () => {
    const { wrapper } = mountMenuList({ tree });

    expect(wrapper.find('MenuTree > FolderNode').at(0).find('li').length).toBe(3)
  });

  it("renders external item", () => {
    const { wrapper } = mountMenuList({ tree });

    expect(wrapper.find('MenuTree > FolderNode').at(2).find('li a').props().href).toBe('http://github.com')
    expect(wrapper.find('MenuTree > FolderNode').at(2).find('li a').text()).toBe('Github')
  });

  it("renders document item", () => {
    const { wrapper } = mountMenuList({ tree });

    expect(wrapper.find('MenuTree > FolderNode').at(0).find('li a').first().text()).toBe('Doc A');
    expect(wrapper.find('MenuTree > FolderNode').at(0).find('li a').first().props().href).toBe('/doc-a');
  });

  it("calls onNavigate", () => {
    const { wrapper, onNavigate } = mountMenuList({ tree });

    wrapper.find('MenuTree ul li a').first().simulate('click');

    expect(onNavigate.mock.calls.length).toBe(1)
  });
});