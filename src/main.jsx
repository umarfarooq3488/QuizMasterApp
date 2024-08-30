import { StrictMode, useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import router from "./routes/Routes.jsx";
import { ThemeProvider } from "./context/ThemeContext.js";

function Main() {
  const [themeMode, setThemeMode] = useState("light");

  const lightMode = () => {
    setThemeMode("light");
    console.log("The light mode is called");
  };

  const darkMode = () => {
    setThemeMode("dark");
    console.log("The dark mode is called");
  };

  useEffect(() => {
    const html = document.querySelector("html");
    html.classList.remove("light", "dark");
    html.classList.add(themeMode);
    console.log("Theme applied:", themeMode, html.classList); // Check the applied classes
  }, [themeMode]);

  return (
    <ThemeProvider value={{ themeMode, lightMode, darkMode }}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Main />
  </StrictMode>
);
