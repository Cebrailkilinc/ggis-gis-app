//Import Package
import React, { FC } from "react";
import { useState } from "react";
import { Button } from "antd";
import "antd/dist/reset.css";

//Import Component and Pages
import Home from "./pages/Home";
import Container from "./layout";

//Import Css
import "./App.css";

const App: FC = () => {
  const [count, setCount] = useState(0);
  console.log(count);
  return (
    <div>
      <Container />
    </div>
  );
};

export default App;
