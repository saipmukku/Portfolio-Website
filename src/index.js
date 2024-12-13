import React from 'react';
import { Provider } from "./components/ui/provider";
import { createSystem, defineConfig } from "@chakra-ui/react"
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

const config = defineConfig({
  theme: {
    tokens: {
      colors: {
        primary: { value: "#DFDFDF" },
        secondary: { value: "#2B4141" },
      },
      fonts: {
        body: { value: "manrope, sans-serif" },
        heading: { value: "Plus Jakarta Sans Variable, sans-serif" },
      },
      shadows: {
        subtle: { value: "0 1px 2px 0 rgba(0, 0, 0, 0.05)" },
      },
    },
  },
});

const system = createSystem(config);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider value={system}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
