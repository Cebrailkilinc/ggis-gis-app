import React, { FC, useState } from "react";
import { useAppSelector } from "../app/hooks";

const Home: FC = () => {
  const persons = useAppSelector((state) => state.person);
  console.log(persons);
  const [deneme, setDeneme] = useState("");
  return <div>Home</div>;
};

export default Home;
