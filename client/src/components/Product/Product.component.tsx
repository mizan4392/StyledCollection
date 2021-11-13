import styled from "styled-components";
import React, { ReactElement } from "react";
import { popularProducts } from "../../util/data";
import Product from "../../pages/Products.page";
interface Props {}

const Container = styled.div`
  padding: 20px;
  display: flex;
`;

export default function Products({}: Props): ReactElement {
  return (
    <Container>
      {popularProducts?.map((item) => {
        return <Product item={item} key={item.id} />;
      })}
    </Container>
  );
}
