import React from "react";

export enum Themes {
  Light,
  Black,
}

export const ThemeContext = React.createContext(Themes.Light);
