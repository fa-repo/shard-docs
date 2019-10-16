import React from "react";
import { mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import FolderNode from "./FolderNode";
import fromSource from "../adapters/fromSource";

const { tree } = fromSource([
  {
    title: "Folder",
    folder: [{ title: "Document", document: <h1>Hello world</h1> }]
  }
]);

test("<FolderNode /> renders correctly", () => {
  const onNavigateMock = jest.fn();
  const wrapper = mount(
    <MemoryRouter>
      <FolderNode node={tree[0]} />
    </MemoryRouter>
  );

  expect(wrapper.find('MenuTree').exists()).toBe(true);

  wrapper.find('.shard-docs-menu-folder-header a').first().simulate('click')

  expect(wrapper.find('MenuTree').exists()).toBe(false);
});