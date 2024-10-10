import { ChangeEvent, FC } from "react";
import { StyledInput } from "./style";
import { Size } from "../../types";

export type InputProps = {
  size?: Size;
  type?: "text" | "number" | "password";
  value?: string;
  placeholder?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
};
export const Input: FC<InputProps> = ({ size, ...restProps }) => {
  return <StyledInput {...restProps} $size={size} />;
};
