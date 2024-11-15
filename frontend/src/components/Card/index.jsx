import { Wrapper, Content, Image } from "./Card.style";

const Card = ({ image, title, artist }) => {
  return (
    <Wrapper>
      <Image src={image} alt={title} />
      <Content>
        <h3>{title}</h3>
        <p>{artist}</p>
      </Content>
    </Wrapper>
  );
};

export default Card;
