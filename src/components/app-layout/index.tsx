import { FC, PropsWithChildren } from "react";
import { StyledAppLayout } from "./style";

export const AppLayout: FC<PropsWithChildren> = ({ children }) => {
  return <StyledAppLayout>{children}</StyledAppLayout>;
};
