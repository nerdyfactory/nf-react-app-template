import React from 'react';
import { PrivateNav, PublicNav } from './navigations';
import './App.css';

function App() {
  const authKey = '';
  return <div className="App">{authKey ? <PrivateNav /> : <PublicNav />}</div>;
}
export default App;
