import { Size } from "../../types";
import { StyledButton } from "./style";

export interface ButtonProps {
  size?: Size;
  onClick: () => void;
  text: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}

export const Button = (props: ButtonProps) => {
  const { size, text, ...restProps } = props;
  return (
    <StyledButton {...restProps} $size={size}>
      {text}
    </StyledButton>
  );
};
