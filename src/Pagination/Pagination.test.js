import React from "react";
import { MemoryRouter } from "react-router-dom";
import { mount } from "enzyme";
import Pagination from "./Pagination";

describe("<Pagination />", () => {
  const mountPagination = (pagination) => {
    return mount(
      <MemoryRouter>
        <Pagination pagination={pagination} />
      </MemoryRouter>
    )
  };

  it("renders nothing", () => {
    const wrapper = mountPagination({ prev: null, next: null });

    expect(wrapper.find(".shard-docs-pagination a").length).toBe(0);
  });


  it("renders prev page", () => {
    const wrapper = mountPagination({
      prev: { text: "Prev", path: "/prev" },
      next: null
    });

    expect(wrapper.find(".shard-docs-pagination a").length).toBe(1);
    expect(wrapper.find(".shard-docs-pagination .prev a").props().href).toBe("/prev");
    expect(wrapper.find(".shard-docs-pagination .prev a").text()).toBe("⟵ Prev");
  });

  it("renders next page", () => {
    const wrapper = mountPagination({
      prev: null,
      next: { text: "Next", path: "/next" }
    });

    expect(wrapper.find(".shard-docs-pagination a").length).toBe(1);
    expect(wrapper.find(".shard-docs-pagination .next a").props().href).toBe("/next");
    expect(wrapper.find(".shard-docs-pagination .next a").text()).toBe("Next ⟶");
  });

  it("renders both pages", () => {
   const wrapper = mountPagination({
    prev: { text: "Prev", path: "/prev" },
    next: { text: "Next", path: "/next" }
  });

    expect(wrapper.find(".shard-docs-pagination a").length).toBe(2);
    expect(wrapper.find(".shard-docs-pagination .prev a").props().href).toBe("/prev");
    expect(wrapper.find(".shard-docs-pagination .prev a").text()).toBe("⟵ Prev");
    expect(wrapper.find(".shard-docs-pagination .next a").props().href).toBe("/next");
    expect(wrapper.find(".shard-docs-pagination .next a").text()).toBe("Next ⟶");
  });
});
