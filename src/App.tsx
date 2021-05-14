import React from 'react';

import Routes from './routes';

import './assets/styles/global.scss';
import { DragonProvider } from './hooks/useDragon';

function App() {
  return (
    <DragonProvider>
      <Routes />
    </DragonProvider>
  );
}

export default App;
