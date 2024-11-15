import styled from "styled-components";

export const Wrapper = styled.div`
  background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 41%,
      rgba(0, 0, 0, 0.65) 100%
    ),
    url(${({ $image }) => $image});

  background-size: 100%, cover;
  background-position: center;
  height: 750px;
  position: relative;
  animation: animateHeroImage 1s;
  @media screen and (max-width: 720px) {
    height: 600px;
  }
  @keyframes animateHeroImage {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const Content = styled.div`
  padding: 20px;
  max-width: var(--maxWidth);
  margin: 0 auto;
  max-width: 700px;
  position: absolute;
  bottom: 20%;
  left: 30%;
  z-index: 100;
`;

export const Text = styled.div`
  transform: translateX(-50%);
  margin-right: 20px;
  min-height: 100px;
  color: var(--white);

  h1 {
    font-size: var(--fontSuperBig);
    color: transparent;
    -webkit-text-fill-color: transparent;
    -webkit-text-stroke-width: 2px;
    -webkit-text-stroke-color: white;

    @media screen and (max-width: 720px) {
      font-size: var(--fontbig);
    }
  }

  p {
    font-size: var(--fontMed);

    @media screen and (max-width: 720px) {
      font-size: var(--fontSmall);
    }
  }

  @media screen and (max-width: 720px) {
    max-width: 100%;
  }
`;

export const Buttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 720px) {
    flex-direction: column;
  }
`;

export const Button = styled.button`
  border: 3px solid var(--white);
  background-color: transparent;
  font-size: var(--fontMed);
  color: var(--white);
  padding: 20px 50px;
  cursor: pointer;
  transition: all 0.3s;
  margin-left: -40px;
  margin-top: 190px;
  font-weight: 600;

  &:hover {
    background-color: var(--white);
    color: var(--black);
  }
`;
