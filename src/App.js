import NavBar from './components/NavBar';
import './App.css';
import ChatInterface from './components/ChatInterface';
import { ThemeProvider } from './ThemeContext';
import { React, useState } from 'react';
import Footer from './components/Footer'
import MyButton from './components/MyButton'

function App({ toggleTheme, isDarkMode }) {
  // Define your sidebar items here

  return (
    <ThemeProvider>
      <div className={`App text-foreground bg-background`}>
        <NavBar toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
        <div className="main-content">
        <div className="sidebar shadow">
          <div className="header"> 
            <MyButton />
          </div>
          <div className="content">Chats</div>
          <div className="footer">
            <Footer />
          </div>
        </div>
          <ChatInterface />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
