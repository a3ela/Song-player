import styled from "styled-components";

export const Wrapper = styled.div`
  transition: all 0.3s;
  border-radius: 20px;
  &:hover {
    padding: 5px 10px;
    box-sizing: border-box;
  }
`;

export const Content = styled.div``;

export const Image = styled.img`
  width: 100%;
  max-width: 720px;
  transition: all 0.3s;
  object-fit: cover;
  border-radius: 5px;
  animation: animateCard -0.5s;

  &:hover {
    opacity: 0.8;
  }

  @keyframes animateCard {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
