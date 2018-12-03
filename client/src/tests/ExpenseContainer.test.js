import { shallow } from "enzyme";
import React from "react";
import ReactDOM from "react-dom";
import ExpensesContainer from "../containers/ExpensesContainer"
import './enzyme_setup'

describe("ExpensesContainer", () => {
  it("should render even with no expenses", () => {
    const expenses = []
    const wrapper = shallow(
      <ExpensesContainer expenses={expenses} />
    );
    expect(wrapper.find(".expenses-container").exists()).toBe(true);
  });
})

describe("when given `expenses`", () => {
  const expenses = [
    { id: 1, title: "Rent", amount: 2000, category: "essentials" },
    { id: 2, title: "MetroCard", amount: 121, category: "essentials"}
  ]

  it("should render correct number of expenses", () => {
    const wrapper = shallow(
      <ExpensesContainer expenses={expenses} />
    );
    expect(wrapper.find("title")).toMatchSnapshot();
    // expect(wrapper.find(".single-expense").length).toEqual(2)
  });
})
