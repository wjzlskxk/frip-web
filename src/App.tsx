import React from 'react';
import Router from './components/router';
import { GlobalStyle } from './styles/globalStyle';

function App() {
  return (
    <div id="App">
      <GlobalStyle />
      <Router />
    </div>
  );
}

export default App;
