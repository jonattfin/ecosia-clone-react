import React from "react";
import { BrowserRouter } from "react-router-dom";

export function withRouter(WrappedComponent, props = {}) {
  return (
    <BrowserRouter>
      <WrappedComponent {...props}/>
    </BrowserRouter>
  )
}
