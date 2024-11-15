import { Wrapper, Content, Image } from "./Card.style";

const Card = ({ image, name, artist }) => {
  return (
    <Wrapper>
      <Image src={image} alt={name} />
      <Content>
        <h3>{name}</h3>
        <p>{artist}</p>
      </Content>
    </Wrapper>
  );
};

export default Card;
