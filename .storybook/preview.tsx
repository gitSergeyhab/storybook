import React from "react";
import { ThemeProvider } from "styled-components";
import { Theme } from "../src/types";
import { themes } from "../src/components/theme-provider/const";
import { Button } from "../src/components/button";
import { StyledStoryLayout } from "./StyledStoryLayout";

const WithThemeProvider = (Story, context) => {
  const [theme, setTheme] = React.useState<Theme>("light");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeProvider theme={themes[theme]}>
      <StyledStoryLayout>
        <Button text="Switch Theme" size="small" onClick={toggleTheme} />
        <Story {...context} />
      </StyledStoryLayout>
    </ThemeProvider>
  );
};

export const decorators = [WithThemeProvider];
