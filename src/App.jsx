import "./App.css";
import Home from "./Home";

function App() {
  return (
    <ThemeProvider value={{ themeMode, lightMode, darkMode }}>
      <Home />
    </ThemeProvider>
  );
}

export default App;
