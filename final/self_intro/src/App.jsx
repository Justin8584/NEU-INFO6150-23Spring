import './App.css';
import { useState } from 'react';

import Header from './header/Header';
import Main from './main/Main';
import Footer from './footer/Footer';

import SwitchTheme from './components/SwitchTheme';

function App() {

  const [page, setPage] = useState('Home');

  return (
    <div className="app" id='theme'>
      <SwitchTheme />
      <Header setPage={setPage} />
      <Main page={page} />
      <Footer setPage={setPage} />
    </div>
  );
}

export default App;
