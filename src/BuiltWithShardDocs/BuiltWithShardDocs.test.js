import React from "react";
import { mount } from "enzyme";
import BuiltWithShardDocs from "./BuiltWithShardDocs";

describe("<BuiltWithShardDocs />", () => {
  it("renders without crashing", () => {
    const wrapper = mount(<BuiltWithShardDocs />)
    expect(wrapper.find('BuiltWithShardDocs').exists()).toBe(true)
  });
});
