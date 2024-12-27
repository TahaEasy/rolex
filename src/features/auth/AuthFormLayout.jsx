import styled from "styled-components";
import { useState } from "react";

import { PiUserCircleDuotone, PiUserCirclePlusDuotone } from "react-icons/pi";
import SignUpForm from "./SignUpForm";
import SignInForm from "./SignInForm";

const StyledFormLayout = styled.div`
  border: 1px var(--color-white) solid;
  border-radius: 8px;
  padding: 1rem;
`;

const Heading = styled.h2`
  text-align: center;
  color: var(--color-primary);
`;

// Toggler:
const ToggleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ToggleBar = styled.div`
  position: relative;
  background-color: var(--color-dark);
  height: 1.5rem;
  width: 5rem;
  border-radius: 9999px;
  /* overflow: hidden; */
`;

const ToggleCheckBox = styled.input.attrs({ type: "checkbox" })`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 4rem;
  height: 2rem;
  opacity: 0;
  cursor: pointer;
  z-index: 3;

  &:checked ~ div {
    transform: translate(20%, -20%) rotate(360deg);
  }
`;

const ToggleIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  transform: translate(-120%, -20%) rotate(0deg);
  transition: all 0.25s;

  & svg {
    font-size: 2.5rem;
  }
`;

const AuthFormLayout = () => {
  const [formMode, setFormMode] = useState("ثبت نام");

  return (
    <StyledFormLayout>
      <div>
        <Heading>{formMode}</Heading>
        <ToggleContainer>
          <ToggleBar>
            <ToggleCheckBox
              onClick={() =>
                setFormMode((mode) => (mode === "ثبت نام" ? "ورود" : "ثبت نام"))
              }
            />
            <ToggleIcon>
              {formMode === "ثبت نام" ? (
                <PiUserCirclePlusDuotone />
              ) : (
                <PiUserCircleDuotone />
              )}
            </ToggleIcon>
          </ToggleBar>
        </ToggleContainer>
      </div>
      <div>{formMode === "ثبت نام" ? <SignUpForm /> : <SignInForm />}</div>
    </StyledFormLayout>
  );
};

export default AuthFormLayout;
