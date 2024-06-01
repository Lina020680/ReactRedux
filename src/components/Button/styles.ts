import styled from "@emotion/styled";
interface ButtonComponentProps {
  disabled: boolean;
}

export const ButtonComponent = styled.button<ButtonComponentProps>`
  width: 100%;
  height: 70px;
  outline: none;
  border: none;
  border-radius: 4px;
  padding: 20px;
  /*background-color: blue;*/
  background: ${({ disabled }) => (disabled ? "grey" : "#2A27E5")};
  color: white;
  font-size: 16px;
  cursor: pointer;
`;
