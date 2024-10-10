import { Theme } from "../../types";

type Themes = Record<Theme, { background: string; color: string }>;

export const themes: Themes = {
  light: {
    background: "#fff",
    color: "#000",
  },
  dark: {
    background: "#000",
    color: "#fff",
  },
};
