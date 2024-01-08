import { useEffect, useState } from "react";

import ThemeButton from "./components/ThemeButton";
import Card from "./components/Card";

import { ThemeProvider } from "./contexts/theme";

function App() {
  const [themeMode, setThemeMode] = useState("light");

  //Accessing darkTheme and lightTheme from the ThemeProvider where they are passes as values instead
  //of passing via the useTheme hook.

  const darkTheme = () => {
    setThemeMode("dark");
  };

  const lightTheme = () => {
    setThemeMode("light");
  };

  useEffect(() => {
    document.querySelector("html").classList.remove("dark", "light");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);

  return (
    //Here we are wrapping App.js with ThemeProvider and passing the values which would be required
    //with value attribute.

    <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeButton />
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
