import React, { createContext } from 'react';
import './App.css';
import ContextapiA from './ContextapiA'; // Assuming ContextapiA is where you want to use context

// Create Context
const fname = createContext();
const lname=createContext();

function App() {
  return (
    <>
      <fname.Provider value={"Imran"}>
        <lname.Provider value={"Ahmad"}>
            <ContextapiA />
        </lname.Provider>
       
      </fname.Provider>
    </>
  );
}

export default App;
export { fname,lname }; // Export the context to be used in other components
