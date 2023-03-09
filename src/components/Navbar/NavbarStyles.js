import styled from "styled-components";


export const Wrapper = styled.div`
  border: solid blue 5px;
  display: flex;
  width: 35%;
  left: 0;

  @media screen and (max-width: 768px) {
    position: relative;
    height: 10vh;
    width: 100%;
  }
`;

export const Navbar = styled.div`
  
`;

export const Logo = styled.div`
border: yellowgreen solid 2px;
  width:50vw;
  display: flex;
  justify-content: flex-start;
  padding-left: 10px;
  font-size: 3rem;
  font-weight: 600;
`;

export const NavButton = styled.div`
  border: yellowgreen solid 2px;
  display: flex;
  justify-content: flex-end;
  padding-right: 10px;
  width: 50vw;
  font-size: 3rem;
`;


