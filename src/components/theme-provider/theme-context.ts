import { createContext } from "react";
import { Theme } from "../../types";

type ThemeContextType = {
  setTheme: (t: Theme) => void;
  theme: Theme;
};

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);
