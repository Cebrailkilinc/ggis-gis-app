import React, { FC, useState } from "react";
import { useAppSelector } from "../../app/hooks";

const Home: FC = () => {
  const persons = useAppSelector((state) => state.person);

  return <div>Home Page</div>;
};

export default Home;
