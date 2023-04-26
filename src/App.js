import React from 'react';
import './App.css';
import TourCard from './components/TourCards';
import SearchAppBar from './components/Navbsr';


function App() {
  return (
    <div className="App">
    <SearchAppBar/>
    <TourCard/>
      
    </div>
  );
}

export default App;
