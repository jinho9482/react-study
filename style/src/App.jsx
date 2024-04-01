import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Button } from "reactstrap";
import { css } from "@emotion/css";

function App() {
  const [color, setColor] = useState("red");
  const [degree, setDegree] = useState("0");
  return (
    <>
      <div
        style={{ width: "100px", height: "100px", backgroundColor: "red" }}
      ></div>
      <div className="box"></div>
      <Button color="danger">danger</Button>
      {/* css in js */}
      <div
        className={css`
          width: 200px;
          height: 300px;
          background-color: skyblue;
          font-size: 24px;
          line-height: 300px;
          &:hover {
            background-image: linear-gradient(skyblue, ${color});
            color: white;
            transition: all 3s;
            transform: rotate(${degree});
          }
        `}
      >
        Hello
      </div>
      color: <input type="color" onChange={(e) => setColor(e.target.value)} />
      <br />
      degree(deg):
      <input type="text" onChange={(e) => setDegree(e.target.value + "deg")} />
    </>
  );
}

export default App;
