import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './Component/Header';
import Routes from './routes'; 
import AppProvider from './providers/AppProvider';
function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Header/>
        <Routes/>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
