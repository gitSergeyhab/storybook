import { ChangeEvent, FC } from "react";
import { StyledInput } from "./style";
import { Size } from "../../types";

export interface InputProps {
  /** Размер. По умолчанию `medium`. - описание из интерфейса */
  size?: Size;
  /** Число, текст, пароль, email - описание из интерфейса */
  type?: "text" | "number" | "password" | "email";
  /** Еще один комментарий ради комментария - описание из интерфейса*/
  value?: string;
  /** И так далее - описание из интерфейса*/
  placeholder?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
}
export const Input: FC<InputProps> = ({ size, ...restProps }) => {
  return <StyledInput {...restProps} $size={size} />;
};
