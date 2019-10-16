
import React from "react";
import { mount } from "enzyme";
import MenuSectionHeader from "./MenuSectionHeader";

test("<MenuSectionHeader /> renders correctly", () => {
  const onToggleMock = jest.fn();
  const wrapper = mount(
    <MenuSectionHeader title="Hello world" expanded={true} onToggle={onToggleMock} />
  );

  expect(wrapper.find('header').exists()).toBe(true);
  expect(wrapper.find('header h3').text()).toBe('Hello world');
  expect(wrapper.find('ArrowDown').exists()).toBe(true);
  expect(wrapper.find('ArrowRight').exists()).toBe(false);

  wrapper.setProps({ expanded: false});

  expect(wrapper.find('ArrowDown').exists()).toBe(false);
  expect(wrapper.find('ArrowRight').exists()).toBe(true);

  wrapper.find('Link').simulate('click');

  expect(onToggleMock.mock.calls[0].length).toBe(1)
});
