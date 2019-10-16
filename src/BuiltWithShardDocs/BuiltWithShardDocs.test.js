import React from "react";
import { mount } from "enzyme";
import BuiltWithShardDocs from "./BuiltWithShardDocs";

describe("<BuiltWithShardDocs />", () => {
  it("renders with default props", () => {
    const wrapper = mount(<BuiltWithShardDocs />)
    expect(wrapper.find('BuiltWithShardDocs').exists()).toBe(true)
  });
});
