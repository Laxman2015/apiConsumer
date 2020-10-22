import React from "react";
import { shallow } from "enzyme";

import TableHeader from "../components/TableHeader";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducers from "../reducers";

const store = createStore(reducers);

describe("Table Header Component", () => {
  it("renders Table Header", () => {
    const headerKey = {
        id: 1,
        name: "Book1",
        price: 10,
        star: 3,
        url: "https://test.com"
    }
    const wrapper = shallow(<TableHeader headerKey={headerKey}/>);

    expect(wrapper).toBeDefined();
    expect(wrapper.find("h1")).toBeDefined();
    expect(wrapper.find("th").length).toBe(Object.keys(headerKey).length);
  });
});
