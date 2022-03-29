import React from "react";

export enum Languages {
  En,
  Ro
};

export const LanguageContext = React.createContext(Languages.En);
