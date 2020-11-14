import React from "react";
import ReactDOM from "react-dom";
import App from "../src/Components/App";
import SearchPhotos from "../src/Components/Search/SearchPhotos";
import { render, getByTestId } from "@testing-library/react";

test("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test("app loads with initial search input of empty string", () => {
  const { container } = render(<SearchPhotos />);
  const query = getByTestId(container, "search-input");
  expect(query.textContent).toBe("");
});
