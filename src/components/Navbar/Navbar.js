import React from "react";
import Menu from "../Menu/Menu";

import { Wrapper, Logo, NavButton } from "./NavbarStyles";

const Navbar = () => {

  return (
    <>
      <Wrapper>
        <Menu />
        <Navbar>
        <Logo>EM.</Logo>
        <NavButton>&#8801;</NavButton>
        </Navbar>
      </Wrapper>
    </>
  );
};

export default Navbar;
