import styled from "styled-components";
import { Icon } from "components/common/Icon";

const LogoWallContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
  color: navy;
  background-color: papayawhip;
`;

const Item = styled.div`
margin: 0 15px;
  padding: 10px 40px;
  background-color: #ecdcc0;
  display: grid;
  place-items: center;
  border-radius: 0.5rem;
`;

const ItemsList = styled.div`
display: flex;
//gap: 30px;
`;

const ItemGroup = styled.div`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  min-width: 100%;
  animation: scroll-x 60s linear infinite;
`;

export const LogoWall = () => {
  return (
    <LogoWallContainer>
      <ItemGroup>
        <ItemsList>
          <Item><Icon name="mcdonalds" size="100px" /></Item>
          <Item><Icon name="jordan" size="100px"/></Item>
          <Item><Icon name="aws" size="100px"/></Item>
          <Item><Icon name="spotify" size="100px"/></Item>
          <Item><Icon name="burger-king" size="100px"/></Item>
          <Item><Icon name="honda" size="100px"/></Item>
          <Item><Icon name="notion" size="100px"/></Item>
          <Item> <Icon name="hulu" size="100px"/> </Item>
        </ItemsList>
      </ItemGroup>

      <ItemGroup>
        <ItemsList>
          <Item><Icon name="mcdonalds" size="100px" /></Item>
          <Item><Icon name="jordan" size="100px"/></Item>
          <Item><Icon name="aws" size="100px"/></Item>
          <Item><Icon name="spotify" size="100px"/></Item>
          <Item><Icon name="burger-king" size="100px"/></Item>
          <Item><Icon name="honda" size="100px"/></Item>
          <Item><Icon name="notion" size="100px"/></Item>
          <Item> <Icon name="hulu" size="100px"/> </Item>
        </ItemsList>
      </ItemGroup>

      <ItemGroup>
        <ItemsList>
          <Item><Icon name="mcdonalds" size="100px" /></Item>
          <Item><Icon name="jordan" size="100px"/></Item>
          <Item><Icon name="aws" size="100px"/></Item>
          <Item><Icon name="spotify" size="100px"/></Item>
          <Item><Icon name="burger-king" size="100px"/></Item>
          <Item><Icon name="honda" size="100px"/></Item>
          <Item><Icon name="notion" size="100px"/></Item>
          <Item> <Icon name="hulu" size="100px"/> </Item>
        </ItemsList>
      </ItemGroup>
    </LogoWallContainer>
  );
};