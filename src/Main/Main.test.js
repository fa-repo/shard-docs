import React from "react";
import { MemoryRouter } from "react-router-dom";
import { mount } from "enzyme";
import Main from "./Main";

const pagination = {
  prev: { text: "Prev", path: "/prev" },
  next: { text: "Next", path: "/next" }
};

const documents = [
  {
    breadcrumbs: [
      { text: "~", link: "/" },
      { text: "Examples", link: "/examples" },
      { text: "Hello world", link: "/examples/hello-world" }
    ],
    document: [
      <h1>Hello earth!</h1>,
      <h2>Hello galaxy!</h2>,
      <h3>Hello universe!</h3>,
    ]
  }
];

describe("<Pagination />", () => {
  const mountMain = (pagination, documents = []) => {
    return mount(
      <MemoryRouter>
        <Main pagination={pagination} documents={documents} />
      </MemoryRouter>
    )
  };

  it("renders Pagination", () => {
    const wrapper = mountMain(pagination);

    expect(wrapper.find("Pagination").exists()).toBe(true);
  });

  it("renders Document", () => {
    const wrapper = mountMain(pagination, documents);

    expect(wrapper.find("Document").length).toBe(1);
  });
});
