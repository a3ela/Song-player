import React from "react";
import { CyberButton } from "./Button.style";
const GlitchButton = ({ name }) => {
  return (
    <CyberButton>
      {name}
      <span aria-hidden>_</span>
      <span aria-hidden className="cybr-btn__glitch">
        {name}_
      </span>
    </CyberButton>
  );
};

export default GlitchButton;
