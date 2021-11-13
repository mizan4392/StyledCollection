import styled from "styled-components";
import React, { ReactElement, useState } from "react";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@mui/icons-material";
import { sliderItems } from "../../util/data";

interface Props {}
type direction = "left" | "right";
interface ArrowI {
  direction: direction;
}
const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  /* background-color: coral; */
  position: relative;
  overflow: hidden;
`;

const Arrow = styled.div<ArrowI>`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props: any) => props.direction === "left" && "10px"};
  right: ${(props: any) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;

const Wrapper = styled.div<{ slidIndex: number }>`
  height: 100%;
  display: flex;
  transform: translateX(${(props) => props.slidIndex * -100}vw);
  transition: all 1.5s ease;
`;

const Slide = styled.div<{ bg: string }>`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bg};
`;

const ImageContainer = styled.div`
  height: 100%;
  flex: 1;
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;

const Image = styled.img`
  height: 80%;
`;
const Title = styled.h1`
  font-size: 50px;
`;
const Desc = styled.p`
  margin: 50px 0px;
  font-weight: 500;
  letter-spacing: 3px;
`;
const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`;
export default function Slider({}: Props): ReactElement {
  const [sideIndex, setSideIndex] = useState<number>(0);
  const handleClick = (direction: direction) => {
    if (direction === "left") {
      setSideIndex(sideIndex > 0 ? sideIndex - 1 : 2);
    } else {
      setSideIndex(sideIndex < 2 ? sideIndex + 1 : 0);
    }
  };
  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper slidIndex={sideIndex}>
        {sliderItems?.map((item) => (
          <Slide bg={item.bg} key={item.id}>
            <ImageContainer>
              <Image src={item.img} />
            </ImageContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Desc>{item.desc}</Desc>
              <Button>Show More</Button>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
}
