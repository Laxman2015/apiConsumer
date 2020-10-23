import React from "react";
import { mount, shallow } from "enzyme";

import ViewDetails from "../components/ViewDetails";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducers from "../reducers";
import { BrowserRouter } from "react-router-dom";

const store = createStore(reducers);

const props = {
  props: {
    match: {
      params: {
        id: 1,
      },
    },
  },
};
const mockConfigState = {
  bookLists: [
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
  ],
};

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useSelector: jest
    .fn()
    .mockReturnValueOnce(mockConfigState)
    .mockReturnValueOnce(mockConfigState),
}));

describe("ViewDetails Component", () => {
  mockConfigState.getState = jest.fn();
  it("renders ViewDetails", () => {
    const wrapper = shallow(
      <Provider store={mockConfigState}>
        <BrowserRouter>
          <ViewDetails {...props} />
        </BrowserRouter>
      </Provider>
    );

    expect(wrapper).toBeDefined();
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find("h1").length).toBe(0);
    expect(wrapper.find(ViewDetails).length).toBe(1);
  });
});
