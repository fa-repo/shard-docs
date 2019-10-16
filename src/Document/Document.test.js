import React from "react";
import { MemoryRouter } from "react-router-dom";
import { mount } from "enzyme";
import Document from "./Document";

const breadcrumbs = [
  { text: "~", link: "/" },
  { text: "Examples", link: "/examples" },
  { text: "Hello world", link: "/examples/hello-world" }
];

const document = <>
  <h1>Hello earth!</h1>
  <h2>Hello galaxy!</h2>
  <h3>Hello universe!</h3>
</>

describe("<Document />", () => {
  it("renders with default props", () => {
    mount(<Document />);
  });

  it("renders breadcrumbs", () => {
    const wrapper = mount(
      <MemoryRouter>
        <Document breadcrumbs={breadcrumbs} />
      </MemoryRouter>
    );

    expect(wrapper.find('.shard-docs-breadcrumbs a').exists()).toBe(true);
  });

  it("renders document", () => {
    const wrapper = mount(
      <MemoryRouter>
        <Document document={document} />
      </MemoryRouter>
    );

    expect(wrapper.find('.shard-docs-document-body').exists()).toBe(true);
    expect(wrapper.find('.shard-docs-document-body h1').text()).toBe('Hello earth!');
    expect(wrapper.find('.shard-docs-document-body h2').text()).toBe('Hello galaxy!');
    expect(wrapper.find('.shard-docs-document-body h3').text()).toBe('Hello universe!');
  });
});
