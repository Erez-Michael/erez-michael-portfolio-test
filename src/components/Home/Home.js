import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import MainPage from "../MainPage/MainPage";

import { Wrapper, LeftContainer, RightContainer } from "./HomeStyles";

const Home = () => {
  return (
    <Wrapper>
      <Navbar />
      <MainPage />
    </Wrapper>
  );
};

export default Home;
