import React from "react";
import { mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import Menu from "./Menu";
import fromSource from "../adapters/fromSource";

const items = fromSource([
  { title: "Doc A", document: <h1>Doc A</h1> }
]);

describe("<Menu />", () => {
  const mountMenu = ({ items,showMenuOnMobile } = {}) => {
    const onNavigate = jest.fn();
    const wrapper = mount(
      <MemoryRouter>
        <Menu onNavigate={onNavigate} items={items} showMenuOnMobile={showMenuOnMobile} />
      </MemoryRouter>
    );

    return { wrapper, onNavigate }
  }

  it("renders without crashing", () => {
    const { wrapper } = mountMenu();

    expect(wrapper.exists()).toBe(true)
  });

  it("renders Menu", () => {
    const { wrapper } = mountMenu({ items });

    expect(wrapper.find('.shard-docs-sidebar-menu ul li').exists()).toBe(true)
  });

  it("can show menu on mobile devices", () => {
    const { wrapper } = mountMenu({ items, showMenuOnMobile: true });

    expect(wrapper.find('.shard-docs-sidebar-menu').props()['data-show-menu-on-mobile']).toBe(true)
  });

  it("can show menu on mobile devices", () => {
    const { wrapper } = mountMenu({ items, showMenuOnMobile: false });

    expect(wrapper.find('.shard-docs-sidebar-menu').props()['data-show-menu-on-mobile']).toBe(false)
  });

  it("calls onNavigate", () => {
    const { wrapper, onNavigate } = mountMenu({ items });

    wrapper.find('.shard-docs-sidebar-menu ul li a').first().simulate('click');

    expect(onNavigate.mock.calls.length).toBe(1)
  });
});
