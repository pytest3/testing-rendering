import { useState, memo, useMemo } from "react";

import "./App.css";
import styled from "styled-components";

import LiftingProps from "./components/LiftingProps";
import PassingEventHandlers from "./components/PassingEventHandlers";
import ToDoApp from "./components/ToDoApp";

import ProfilePage from "./components/ProfilePage";

function Child() {
  console.log("Child rendered");
  return <div>Child</div>;
}

const MemoizedChild = memo(function MemoizedChild(props) {
  console.log("Memoized child rendered");
  return <div>I'm a Memoized Child</div>;
});

function Parent({ children }) {
  const [toggle, setToggle] = useState(false);
  console.log("Parent rendered");

  return (
    <>
      <button
        onClick={() => {
          console.log("Parent clicked");
          setToggle((toggle) => !toggle);
        }}
      >
        click me
      </button>
      {/* <Child></Child> */}
      {children}
      <MemoizedChild
        info={useMemo(() => {
          product: "shirt";
        })}
        size="small"
      ></MemoizedChild>
      {/* <MemoizedChild size="small"></MemoizedChild> */}
    </>
  );
}

function App() {
  return (
    <div>
      <Parent>
        <Child></Child>
      </Parent>
    </div>
  );
}

export default App;
