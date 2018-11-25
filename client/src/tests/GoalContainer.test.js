import React from "react";
import ReactDOM from "react-dom";
import GoalsContainer from "../components/GoalsContainer"

describe("GoalsContainer", () => {
  it("renders without crashing", () => {
    let goals = []
    const div = document.createElement("div");
    ReactDOM.render(<GoalsContainer goals={goals} />, div)
  });
})
