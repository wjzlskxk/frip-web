import React from 'react';
import Router from './components/router';
import { GlobalStyle } from './styles/globalStyle';

function App() {
  return (
    <GlobalStyle>
      <Router />
    </GlobalStyle>
  );
}

export default App;
