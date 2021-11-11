import React, { ReactElement } from "react";
import styled from "styled-components";
import { categories } from "../../util/data";
import CategoryItem from "./CategoryItem.component";

interface Props {}

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
`;

export default function Categories({}: Props): ReactElement {
  return (
    <Container>
      {categories.map((item) => (
        <CategoryItem item={item} key={item.id} />
      ))}
    </Container>
  );
}
