import React from "react";
import ReactDOM from "react-dom";
import DateFnsUtils from "@date-io/date-fns";

import { MuiPickersUtilsProvider } from "@material-ui/pickers";

import Todo from "./components/todo/TodoContainer";

import "./index.scss";

ReactDOM.render(
  <React.StrictMode>
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Todo />
    </MuiPickersUtilsProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
