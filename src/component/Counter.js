import React, { useState, useEffect } from "react";

const Counter = () => {
  // useState
  const [count, setCount] = React.useState(0);
  // Every rerender
  useEffect(() => {
    console.log("I run everytime this component rerenders");
  });

  // onMount
  useEffect(() => {
    console.log("I Only run once (When the component gets mounted)");
  }, []);

  // Condition based
  useEffect(() => {
    console.log("I run everytime my condition is changed");
  }, [count]);

  //Callback
  const Increment = React.useCallback(() => {
    setCount((prev) => prev + 1);
  }, [setCount]);

  //Usememo
  const result = React.useMemo(() => {
    let i = 0;
    console.time("result");
    while (i < 10000000) {
      i++;
    }
    console.timeEnd("result");
    return 90;
  }, []);
  return (
    <div style={{ textAlign: "center" }}>
      <h1>
        Performance optiminezation in React {coun} Result is {result}
      </h1>
      <button onClick={Increment}>Increment Count</button>
    </div>
  );
};

export default Counter;