import React from "react";
import { mount, shallow } from "enzyme";

import TableBody from "../components/TableBody";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducers from "../reducers";
import { BrowserRouter } from "react-router-dom";

const store = createStore(reducers);

describe("Table Body Component", () => {
  const data = [
    {
      id: 1,
      name: "Book1",
      price: 10,
      star: 3,
      url: "https://test.com",
    },
    {
      id: 2,
      name: "Book2",
      price: 15,
      star: 5,
      url: "https://test2.com",
    },
    {
      id: 3,
      name: "Book3",
      price: 20,
      star: 3,
      url: "https://test3.com",
    },
  ];

  it("renders Table Body", () => {
    const wrapper = shallow(<TableBody data={data} />);

    expect(wrapper).toBeDefined();
    expect(wrapper.find("tr").length).toBe(3);
  });

  it("click Table row", () => {
    const viewDetails = jest.fn();
    const wrapper = mount(
      <Provider store={store}>
        <BrowserRouter>
          <TableBody data={data} />
        </BrowserRouter>
      </Provider>
    );

    wrapper
      .find("tr")
      .at(0)
      .props()
      .onClick();
    wrapper.update();
    wrapper
      .find("tr")
      .at(0)
      .simulate("click");
    expect(viewDetails).toBeDefined();
  });
});
