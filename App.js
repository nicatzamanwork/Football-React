import logo from "./logo.svg";
import "./App.css";
import MeydanComponent from "./companents/MeydanComponent";
import Controller from "./companents/Controller";
import { useState } from "react";

function App() {
  const [position, SetPosition] = useState({
    x: 50,
    y: 50,
  });

  const divStyle = {
    borderLeft: "red 5px solid",
    borderRight: "red 5px solid",
    backgroundColor: "green",
    marginLeft: "18%",
    height: "500px",
    color: "blue",
    width: "1000px",
    position: "relative",
  };
  return (
    <div className="App">
      <MeydanComponent />
      <div style={divStyle}>
        <div
          id="ball"
          style={{
            borderRadius: "50%",
            backgroundColor: "red",
            width: "20px",
            height: "20px",
            left: position.x + "%",
            right: position.x + "%",
            top: position.y + "%",
            bottom: position.y + "%",
            position: "absolute",
          }}
        ></div>
      </div>

      <button
        className=""
        onClick={() => SetPosition({ ...position, y: position.y + 10 })}
      >
        Down
      </button>
      <button
        className=""
        onClick={() => SetPosition({ ...position, y: position.y - 10 })}
      >
        Up
      </button>
      <button
        className=""
        onClick={() => SetPosition({ ...position, x: position.x + 10 })}
      >
        Right
      </button>
      <button
        className=""
        onClick={() => SetPosition({ ...position, x: position.x - 10 })}
      >
        Left
      </button>
    </div>
  );
}

export default App;
