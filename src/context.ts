import React from "react";
import { Languages, Themes } from "./constants";

export const LanguageContext = React.createContext(Languages.En);
export const ThemeContext = React.createContext(Themes.Light);
