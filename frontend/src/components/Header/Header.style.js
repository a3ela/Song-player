import styled from "styled-components";

export const Wrapper = styled.div`
  background: var(--black);
  padding: 0 20px;
  height: 80px;

  @media screen and (max-width: 1024px) {
    height: 70px;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: var(--maxWidth);
  margin: 0 auto;

  @media screen and (max-width: 1024px) {
    padding: 10px 0;
  }
`;

export const Logo = styled.img`
  padding-top: 5px;
  width: 100px;
  height: 80px;
  object-fit: contain;
  @media screen and (max-width: 1024px) {
    width: 70px;
  }
`;

export const Button = styled.button`
  font-size: var(--fontMed);
  padding: 5px 20px;
  margin-right: 10px;
  background: ${(props) => props.$lightDark || "var(--black)"};
  color: var(--white);
  border: ${(props) => props.$border || "1px solid var(--white)"};
  border-radius: 1px;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    background: var(--white);
    color: var(--black);
  }
`;
