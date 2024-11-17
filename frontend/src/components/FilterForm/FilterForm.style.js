import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  align-items: center;
`;

export const Wrapper = styled.div`
  margin-left: 2rem;
`;

export const SearchContainer = styled.div`
  position: relative;
  cursor: pointer;
  input[type="search"] {
    width: ${({ $display }) => ($display ? "15rem" : "3.5rem")};
    border: 1px solid var(--white);
    color: var(--white);
    background-color: transparent;
    outline: none;
    transition: all 0.2% linear;
    padding: 0.8rem;
    transition: all 0.5s linear;
    font-size: var(--fontSmall);
    font-weight: 600;
    cursor: pointer;
  }

  &:active:hover input::placeholder {
    color: var(--white);
  }
  input[type="search"]:focus {
    outline: none;
  }

  svg {
    position: absolute;
    top: 50%;
    right: 1rem;
    transform: translateY(-50%);
    font-size: 1.5rem;
    color: #fff;
  }
`;
export const Button = styled.button`
  width: 10rem;
  padding: 0.7rem;
  border: 1px solid var(--white);
  background: none;
  color: var(--white);
  font-size: var(--fontSmall);
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  gap: 9px;
`;

export const FilterContainer = styled.div`
  position: relative;

  svg {
    font-size: 1.2rem;
    color: var(--white);
  }

  fieldset {
    padding: 15px;
    position: absolute;
    top: 120%;
    left: -30%;
    z-index: 10;
    background-color: var(--black);
  }
  fieldset button {
    width: 100%;
  }

  li {
    list-style: none;
  }
  label {
    display: block;
    position: relative;
    padding: 0 35px;
    margin-bottom: 12px;
    cursor: pointer;
    font-size: 1rem;
    --webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  span {
    position: absolute;
    top: 0;
    left: 0;
    height: 25px;
    width: 25px;
    border: 2px solid var(--white);
  }

  lebel:hover input ~ span {
    background-color: #ccc;
  }

  input:checked ~ span {
    background-color: var(--black);
  }

  span:after {
    content: "";
    position: absolute;
    display: none;
  }

  input:checked ~ span:after {
    display: block;
  }

  label span:after {
    left: 5px;
    top: 1px;
    width: 6px;
    height: 12px;
    border: solid white;
    border-width: 0 3px 3px 0;
    transform: rotate(45deg);
  }
`;
