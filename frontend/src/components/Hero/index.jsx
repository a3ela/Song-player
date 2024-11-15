import { useState } from "react";
import { Wrapper, Content, Text, Button, Buttons } from "./Hero.style";
import GlitchButton from "../GlitchButton";

const Hero = ({ musics }) => {
  const [contentIndex, setContentIndex] = useState(0);

  const { image, name, artist, year } = musics[contentIndex];
  return (
    <Wrapper $image={image}>
      <Content>
        <Text>
          <h1>{name}</h1>
          <p>{artist}</p>
          <p>{year}</p>
        </Text>
        <Buttons>
          <GlitchButton name="Play Now" />
          <Button>Add Favourite</Button>
        </Buttons>
      </Content>
    </Wrapper>
  );
};

export default Hero;
