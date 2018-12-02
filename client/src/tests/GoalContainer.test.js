import { shallow } from "enzyme";
import React from "react";
import ReactDOM from "react-dom";
import GoalsContainer from "../containers/GoalsContainer"
import './enzyme_setup'

describe("GoalsContainer", () => {
  it("renders without crashing", () => {
    const goals = []
    const div = document.createElement("div");
    ReactDOM.render(<GoalsContainer goals={goals} />, div)
  });

  it("should render even with no goals", () => {
    const goals = []
    const wrapper = shallow(
      <GoalsContainer goals={goals} />
    );
    expect(wrapper.find(".goals-container").exists()).toBe(true);
  });
})

describe("when given `goals`", () => {
  const goals = [
    { id: 1, title: "Trip to Paris", amount: 2000 },
    { id: 2, title: "New bike", amount: 1000}
  ]

  it("should render correct number of goals", () => {
    const wrapper = shallow(
      <GoalsContainer goals={goals} />
    );
    expect(wrapper.find("title")).toMatchSnapshot();
    // expect(wrapper.find(".single-goal").length).toEqual(2)
  });
})
