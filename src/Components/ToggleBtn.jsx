import * as React from "react";
import Switch from "@mui/material/Switch";
import { useTheme } from "../context/ThemeContext";

const ToggleBtn = () => {
  const { themeMode, lightMode, darkMode } = useTheme();
  const [checked, setChecked] = React.useState(themeMode === "dark");

  const handleChange = (event) => {
    setChecked(event.target.checked);
    if (event.target.checked) {
      darkMode();
    } else {
      lightMode();
    }
  };

  return (
    <Switch
      checked={checked}
      onChange={handleChange}
      inputProps={{ "aria-label": "controlled" }}
    />
  );
};

export default ToggleBtn;
