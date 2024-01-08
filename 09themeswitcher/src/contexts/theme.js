import { createContext, useContext } from "react";

//Creating context for theme, ThemeContext which is having all the necessary variables and methods
//that we will need.

export const ThemeContext = createContext({
  themeMode: "light",
  darkTheme: () => {},
  lightTheme: () => {},
});

//Here the below linke ThemeProvider is not adding any extra feature, only we are naming it, so
//that instead of using ThemeContext.Provider we can directly use ThemeProvider

export const ThemeProvider = ThemeContext.Provider;

//In the next snippet, we are creating one of our own hook so that we can grab any of the value we
//want in any component we want easily.

export default function useTheme() {
  return useContext(ThemeContext);
}
