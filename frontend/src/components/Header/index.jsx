import React from "react";
// image
import logo from "../../assets/headlogo.png";
// style
import { Wrapper, Content, Logo, Button } from "./Header.style";
const Header = () => {
  return (
    <Wrapper>
      <Content>
        <Logo src={logo} alt="logo-image" />
        <div>
          <Button>Add Music</Button>
          <Button $border={"none"} $lightDark={"var(--green)"}>
            Log In
          </Button>
        </div>
      </Content>
    </Wrapper>
  );
};

export default Header;
