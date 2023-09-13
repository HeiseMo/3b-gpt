import logo from './logo.svg';
import NavBar from './components/NavBar'
import './App.css';
import Theme from './components/Theme';
import { ThemeProvider } from './ThemeContext';
import {React, useState} from 'react';

function App({ toggleTheme ,isDarkMode }) {


  return (
    <ThemeProvider>
      <div className={`App`}>
      <NavBar toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
    </div>
    </ThemeProvider>
  );
}

export default App;
