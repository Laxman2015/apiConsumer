import React, { Fragment } from "react";

function App(props) {
  return (
    <h1>
      Welcome to React App
      {props.country && (
        <Fragment>
          ,<span>{props.country}</span>
        </Fragment>
      )}{" "}
      without React CLI.
    </h1>
  );
}

export default App;
