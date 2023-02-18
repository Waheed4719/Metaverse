import { createContext, useCallback, useState, useEffect } from "react";

export const DisplayModeContext = createContext({
  isDarkMode: false,
  toggleDarkMode: () => {},
});

// const htmlDocument = document.getElementsByTagName("html")[0];
let htmlDocument;
const toggleDisplayModeClass = (displayMode) => {
  if (displayMode) {
    htmlDocument.classList.add("dark");
  } else {
    htmlDocument.classList.remove("dark");
  }
  localStorage.setItem("isDarkMode", displayMode.toString());
};
export const DisplayModeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (typeof window === "object") {
      // eslint-disable-next-line prefer-destructuring
      htmlDocument = document.getElementsByTagName("html")[0];
    }
  }, []);

  useEffect(() => {
    if (localStorage.getItem("isDarkMode") === "true") {
      setIsDarkMode(true);
      toggleDisplayModeClass(true);
    } else if (localStorage.getItem("isDarkMode") === "false") {
      setIsDarkMode(false);
      toggleDisplayModeClass(false);
    } else {
      toggleDisplayModeClass(isDarkMode);
    }
  }, []);

  const toggleDarkMode = useCallback(() => {
    setIsDarkMode((prevDisplayMode) => {
      toggleDisplayModeClass(!prevDisplayMode);
      return !prevDisplayMode;
    });
  }, [isDarkMode]);

  return (
    <DisplayModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </DisplayModeContext.Provider>
  );
};
