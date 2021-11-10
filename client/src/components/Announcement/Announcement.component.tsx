import styled from "styled-components";
import React, { ReactElement } from "react";

interface Props {}

const Container = styled.div`
  height: 30px;
  background-color: teal;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  font-weight: 500;
`;

export default function Announcement({}: Props): ReactElement {
  return <Container>Super Deal</Container>;
}
