import './App.css';
import Layout from './Layout';
import React, { useState } from 'react'

import {
  BrowserRouter as Router,
 Outlet
} from 'react-router-dom';
function Home() {
  let [changeLeftMargin, setchangeLeftMargin] = useState('0px')
  const changeBodyLeftMargin = (data) => {
    setchangeLeftMargin(data);
  }
  return (
  <>
      <Layout changeBodyLeftMargin={changeBodyLeftMargin} />
      <div style={{ marginLeft: changeLeftMargin ? '0px' : '170px' }} className='Body'>
        <Outlet/>
      </div>
      </>
  );
}

export default Home;
