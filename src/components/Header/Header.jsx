import styled from "styled-components";
import { Outlet } from "react-router-dom";
import { Navigation } from "./Navigation";

const HeaderContainer = styled.header`
  padding: 5px 0;
  border-bottom: 2px solid black;
  z-index: 3;
`;

export const Header = () => {
  return (
    <div>
      <HeaderContainer>
        <Navigation />
      </HeaderContainer>
      <Outlet />
    </div>
  );
}