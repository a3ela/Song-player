import styled from "styled-components";

export const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-around;
  padding: 20px;
  border-top: 1px solid var(--white);
  background-color: var(--black);
  color: white;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;
export const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 20px;
  max-width: 300px;
  @media (max-width: 768px) {
    align-items: center;
    text-align: center;
    margin-bottom: 20px;
  }
`;
export const FooterHeader = styled.h3`
  margin-bottom: 20px;
  font-size: 1.5em;
  position: relative;

  &:after {
    position: absolute;
    content: "";
    width: 50%;
    height: 2px;
    background: var(--white);
    left: 0;
    bottom: -5px;
  }
`;
export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  a {
    color: white;
    font-size: 2em;
    transition: color 0.3s ease;
    &:hover {
      color: #61dafb;
    }
  }
`;
