import React from 'react';
import Router from './routes/router';
import AppProvider from './context/App Provider';

function App() {
  return (
    <AppProvider>
      <Router />
    </AppProvider>
  );
}

export default App;
