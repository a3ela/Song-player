import { useEffect, useState } from "react";
// stlyes
import {
  Wrapper,
  Content,
  Text,
  Button,
  Buttons,
  Image,
  ArrowContainer,
  ArrowButton,
} from "./Hero.style";

import GlitchButton from "../GlitchButton";
// icons
import { HiArrowSmLeft, HiArrowSmRight } from "react-icons/hi";

const Hero = ({ musics }) => {
  const [contentIndex, setContentIndex] = useState(0);

  const handleLeftClick = () => {
    setContentIndex((prevIdx) =>
      prevIdx === 0 ? musics.length - 1 : prevIdx - 1
    );
  };

  const handleRightClick = () => {
    setContentIndex((prevIdx) =>
      prevIdx === musics.length - 1 ? 0 : prevIdx + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setContentIndex((prevIdx) =>
        prevIdx === musics.length - 1 ? 0 : prevIdx + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [musics.length]);

  const { image, name, artist, year } = musics[contentIndex];
  return (
    <Wrapper $image={image}>
      <Image src={image} key={contentIndex} />
      <Content>
        <Text>
          <h1>
            <i>{name}</i>
          </h1>
          <p>{artist}</p>
          <p>{year}</p>
        </Text>
        <Buttons>
          <GlitchButton name="Play Now" />
          <Button>Add Favourite</Button>
        </Buttons>
      </Content>
      <ArrowContainer>
        <ArrowButton onClick={handleLeftClick} position="left">
          <HiArrowSmLeft />
        </ArrowButton>
        <ArrowButton onClick={handleRightClick} position="right">
          <HiArrowSmRight />
        </ArrowButton>
      </ArrowContainer>
    </Wrapper>
  );
};

export default Hero;
