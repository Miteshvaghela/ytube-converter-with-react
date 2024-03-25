import {useState, useEffect} from 'react'
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import ConvertForm from './components/ConvertForm';

function App() { 

  const handleBtn = (url) => {
      console.log('Video URL : ', url);
      return true;
  }

  return (
    <div className="App mx-aut vw-100 vh-100">
      <Header title='Youtube Converter.'/>
      <ConvertForm handleBtn={handleBtn}/>
      <Footer text="All rights reserved."/>
    </div>
  );
}

export default App;
