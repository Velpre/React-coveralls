import * as React from "react";
import * as ReactDOM from "react-dom";
import { ListMovies } from "./movieApplication";

ReactDOM.render(
  <ListMovies movies={["My movies"]} />,
  document.getElementById("app")
);
