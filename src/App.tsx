import { ChangeEvent, useEffect, useState } from "react";
import { AppLayout } from "./components/app-layout";
import { Button } from "./components/button";
import { Input } from "./components/input";
import { useTheme } from "./components/theme-provider/use-theme";

function App() {
  const { setTheme, theme } = useTheme();
  const [value, setValue] = useState("");
  const [antiValue, setAntiValue] = useState(value);

  useEffect(() => {
    setAntiValue(value.toLocaleUpperCase().split("").reverse().join("_"));
  }, [value, setAntiValue]);

  const onButtonClick = () => setTheme(theme === "light" ? "dark" : "light");
  const onInputChange = (event: ChangeEvent<HTMLInputElement>) =>
    setValue(event.target.value);

  return (
    <AppLayout>
      <Button
        text={theme === "dark" ? "сменить на светлый" : "сменить на темный"}
        size="large"
        onClick={onButtonClick}
      />
      <br />
      <Input value={value} onChange={onInputChange} size="small" />
      <br />
      <div>{antiValue}</div>
    </AppLayout>
  );
}

export default App;
