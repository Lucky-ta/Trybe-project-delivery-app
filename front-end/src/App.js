import React from 'react';
import Router from './routes/router';
import AppProvider from './context/AppProvider';

function App() {
  return (
    <AppProvider>
      <Router />
    </AppProvider>
  );
}

export default App;
