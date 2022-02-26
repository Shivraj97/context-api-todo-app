import React from "react";
import { ThemeContextType } from "../@types/theme";
import { ThemeContext } from "../context/themeContext";
import { MdDarkMode, MdLightMode } from "react-icons/md";

const ThemeWrapper: React.FC = ({ children }) => {
  const { theme, changeTheme } = React.useContext(
    ThemeContext
  ) as ThemeContextType;

  const handleThemeChange = (event: React.MouseEvent<HTMLDivElement>) => {
    changeTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <div className="Theme-wrapper" data-theme={theme}>
      <div className="theme-switcher" onClick={handleThemeChange}>
        {theme === "dark" ? (
          <MdDarkMode size={30} />
        ) : (
          <MdLightMode size={30} />
        )}
      </div>
      {children}
    </div>
  );
};

export default ThemeWrapper;
