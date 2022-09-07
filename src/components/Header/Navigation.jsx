import styled from "styled-components";
import { NavLink } from "react-router-dom";

const NavList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
`;

export const Navigation = () => {
  return (
    <NavList>
      <li style={{ marginRight: '10px', }}>
        <NavLink to="keenslider">KeenSlider</NavLink>
      </li>
      <li style={{ marginRight: '10px', }}>
        <NavLink to="carouselslider">CarouselSlider</NavLink>
      </li>
      <li style={{ marginRight: '10px', }}>
        <NavLink to="clock">DigitalClock</NavLink>
      </li>
      <li style={{ marginRight: '10px', }}>
        <NavLink to="logowall">LogoWall</NavLink>
      </li>
      <li>
        <NavLink to="firebaseauth">FirebaseAuth</NavLink>
      </li>
    </NavList>
  );
}