import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './dist/output.css';
import App from './App';
import { NextUIProvider } from "@nextui-org/react";
import reportWebVitals from './reportWebVitals';

function ThemeProvider() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <NextUIProvider>
      <main className={`App ${isDarkMode ? 'dark' : ''}`}>
        <App toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
      </main>
    </NextUIProvider>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <ThemeProvider />
  </React.StrictMode>
);

reportWebVitals();
