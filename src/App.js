import React from 'react';

import { BrowserRouter, Route } from 'react-router-dom';

import Welcome from './components/Welcome/Welcome';
import Chat from './components/Chat/Chat';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Route path='/' exact component={Welcome} />
      <Route path='/chat' component={Chat} />
    </BrowserRouter>
  );
}

export default App;
