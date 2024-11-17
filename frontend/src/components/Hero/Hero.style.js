import styled, { keyframes } from "styled-components";

const slideIn = keyframes` from { transform: translateX(100%); opacity: 0; } to { transform: translateX(0); opacity: 1; } `;

export const Wrapper = styled.div`
  background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 41%,
      rgba(0, 0, 0, 0.8) 100%
    ),
    url(${({ $image }) => $image});

  background-size: 100%, cover;
  background-position: center;

  height: 750px;
  position: relative;

  &::before {
    position: absolute;
    content: "";
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: inherit;
    filter: blur(1px);
    -webkit-filter: blur(5px);
  }

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

  animation: animateHeroImage 1s;
`;

export const Content = styled.div`
  padding: 20px;
  max-width: var(--maxWidth);
  margin: 0 auto;
  max-width: 700px;
  position: absolute;
  bottom: 20%;
  left: 40%;
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
    text-decoration: underline;
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

export const Image = styled.img`
  width: 30rem;
  height: 30rem;
  position: absolute;
  left: 10%;
  top: 20%;
  animation: ${slideIn} 1s ease-out forwards;
`;
export const ArrowContainer = styled.div`
  position: absolute;
  top: 50%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  transform: translateY(-50%);
`;
export const ArrowButton = styled.button`
  background: rgba(0, 0, 0, 0.5);
  border: none;
  color: white;
  padding: 1rem;
  cursor: pointer;
  position: absolute;
  ${(props) =>
    props.position === "left" ? "left: 10px;" : "right: 10px;"} display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: background 0.3s ease-in-out;
  &:hover {
    background: rgba(255, 255, 255, 0.8);
    color: black;
  }
  svg {
    width: 2rem;
    height: 2rem;
  }
`;
