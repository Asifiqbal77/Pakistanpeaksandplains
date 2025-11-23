import { useState } from "react";
import styled from "styled-components";

function Button() {
  const [buttonColor, setButtonColor] = useState(false);

  //CSS-in-JS concept
  const StyledButton = styled.button`
    width: 150px;
    height: 50px;
    background-color: ${ buttonColor ? "lightblue" : "lightgreen"};
    font-family: Times New Roman;
  `;

  const StyledHeading1 = styled.h1`
    color: blue;
  `;

  const StyledHeading5 = styled.h5`
    color: red;
  `;

  const handleToggle = () => {
    console.log("clicked.");
    setButtonColor((buttonColor) => !(buttonColor));
    console.log(buttonColor);
  }

  return (
    <>
      <StyledHeading1>CSS-in-JS</StyledHeading1>
      <StyledButton buttonColor={buttonColor} onClick={handleToggle}>
        LogIn
      </StyledButton>
      <StyledHeading5>Heading 5</StyledHeading5>
    </>
  );
}

export default Button;