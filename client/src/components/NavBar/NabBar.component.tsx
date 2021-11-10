import React, { ReactElement } from "react";
import styled from "styled-components";
import { Badge } from "@mui/material";
import { ShoppingCartOutlined, Search } from "@mui/icons-material";
interface Props {}

const Container = styled.div`
  height: 60px;
`;

const Wrapper = styled.div`
  display: flex;
  padding: 0px 22px;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
`;

const Logo = styled.p`
  font-weight: bold;
`;

const MenuItem = styled.div`
  font-size: 15px;
  cursor: pointer;
  margin-left: 15px;
`;

export default function NabBar({}: Props): ReactElement {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input />
            <Search style={{ color: "gray", fontSize: "16xp" }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>Styled Shop</Logo>
        </Center>
        <Right>
          <MenuItem>Register</MenuItem>
          <MenuItem>SignIn</MenuItem>
          <MenuItem>
            <Badge color="primary" badgeContent={4}>
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
}
