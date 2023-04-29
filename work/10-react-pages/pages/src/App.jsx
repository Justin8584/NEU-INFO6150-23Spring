import './App.css';

import { useState } from 'react';

import Header from './Header';
import Main from './Main';
import Footer from './Footer';

function App() {

  /* 
    it changes the state in pages in Main, and setPage is called in Header. 
    So, put the useState in both nearest common ancestor. 
  */
  const [page, setPage] = useState('Home');

  return (
    <div className="app">
      <Header setPage={setPage} />
      <Main page={page} />
      <Footer />
    </div>
  );
}

export default App;
