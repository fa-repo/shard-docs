import React from "react";
import { MemoryRouter } from "react-router-dom";
import { mount } from "enzyme";
import Breadcrumbs from "./Breadcrumbs";

const breadcrumbs = [
  { text: "~", link: "/" },
  { text: "Examples", link: "/examples" },
  { text: "Hello world", link: "/examples/hello-world" }
];

describe("<Breadcrumbs />", () => {
  it("renders without crashing", () => {
    mount(<Breadcrumbs />);
  });

  it("renders breadcrumbs", () => {
    const wrapper = mount(
      <MemoryRouter>
        <Breadcrumbs breadcrumbs={breadcrumbs} />
      </MemoryRouter>
    );

    expect(wrapper.find("nav ol li a").length).toBe(3);
    expect(wrapper.find("nav ol li a").at(0).props().href).toBe("/");
    expect(wrapper.find("nav ol li a").at(1).props().href).toBe("/examples");
    expect(wrapper.find("nav ol li a").at(2).props().href).toBe("/examples/hello-world");
    expect(wrapper.find("nav ol li a").at(0).text()).toBe("~");
    expect(wrapper.find("nav ol li a").at(1).text()).toBe("Examples");
    expect(wrapper.find("nav ol li a").at(2).text()).toBe("Hello world");
  });
});
