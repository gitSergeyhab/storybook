import styled from "styled-components";
import { Size } from "../../types";

export const StyledInput = styled.input<{ $size?: Size }>`
  padding: 10px;
  border: 2px solid ${({ theme }) => theme.color};
  border-radius: 5px;
  font-size: 16px;
  outline: none;
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  ${({ $size }) => {
    switch ($size) {
      case "small":
        return "padding: 5px; font-size: 12px;";
      case "large":
        return "padding: 15px; font-size: 20px;";
      default:
        return "padding: 10px; font-size: 16px;";
    }
  }}
`;
