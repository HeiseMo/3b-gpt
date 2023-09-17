import React, { useState } from 'react';
import NavBar from './components/NavBar';
import './App.css';
import ChatInterface from './components/ChatInterface';
import { ThemeProvider } from './ThemeContext';
import Footer from './components/Footer';
import MyButton from './components/MyButton';

function App({ toggleTheme, isDarkMode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  // Function to toggle the sidebar
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <ThemeProvider>
      <div className={`App text-foreground bg-background flex`}>
        <div
          className={`sidebar shadow ${isSidebarOpen ? '' : 'collapsed'}`}
          style={{ flexShrink: isSidebarOpen ? 1 : 0 }}
        >
          <div className="header">
            <MyButton toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
          </div>
          <div className="content">Chats</div>
          <div className="footer">
            <Footer />
          </div>
        </div>
        <div className={`main-content flex`}>
          {/* Pass the toggleSidebar function to the NavBar */}
          <NavBar className="justify-start" toggleTheme={toggleTheme} isDarkMode={isDarkMode} toggleSidebar={toggleSidebar} />
          <div className="flex-grow">
            <ChatInterface />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
