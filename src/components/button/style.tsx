import styled from "styled-components";

export interface StyledButtonProps {
  $size?: "small" | "medium" | "large";
}

export const StyledButton = styled.button<StyledButtonProps>`
  padding: 10px 20px;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.color};
  border: 2px solid ${({ theme }) => theme.color};
  cursor: pointer;
  font-size: 16px;
  transition: all 0.3s ease;

  ${({ $size }) => {
    switch ($size) {
      case "small":
        return "padding: 5px 10px; font-size: 12px;";
      case "large":
        return "padding: 15px 30px; font-size: 20px;";
      default:
        return "padding: 10px 20px; font-size: 16px;";
    }
  }}

  &:hover {
    background-color: ${({ theme }) => theme.color};
    color: ${({ theme }) => theme.background};
  }
`;
