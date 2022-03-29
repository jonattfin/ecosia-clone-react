import React from 'react';
import ReactDOM from 'react-dom';
// import * as Sentry from "@sentry/react";
// import { BrowserTracing } from "@sentry/tracing";

import App from './App';
import reportWebVitals from './reportWebVitals';

// Sentry.init({
//   dsn: "https://48e907ca0fd64324a8d980709247c661@o1177273.ingest.sentry.io/6276136",
//   integrations: [new BrowserTracing()],

//   // Set tracesSampleRate to 1.0 to capture 100%
//   // of transactions for performance monitoring.
//   // We recommend adjusting this value in production
//   tracesSampleRate: 1.0,
// });

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
