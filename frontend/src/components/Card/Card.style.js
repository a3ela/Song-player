import styled from "styled-components";

export const Wrapper = styled.div`
  transition: all 0.3s;
  border-radius: 20px;

  &:hover {
    cursor: pointer;
  }

  h3 {
    font-size: var(--fontMed);
    margin-top: 5px;
  }

  p {
    font-size: var(--fontSmall);
  }
`;

export const Content = styled.div``;

export const Image = styled.img`
  width: 100%;
  max-width: 720px;
  height: 220px;
  transition: all 0.3s;
  object-fit: cover;
  border-radius: 5px;
  animation: animateCard -0.5s;

  @keyframes animateCard {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
