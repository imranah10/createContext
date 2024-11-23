import React, { createContext } from 'react';
import './App.css';
import ContextapiA from './ContextapiA'; // Assuming ContextapiA is where you want to use context
// import ContextapiB from './ContextapiB';


// createContext,Provider,useContext/consumer
// avoiding props drilling using contetxt consumer 
const fname = createContext();
const lname=createContext();

// createContext,Provider,useContext
// avoiding contetxt consumer using useContext
const Age=createContext()
const Strength=createContext()

function App() {
  return (
    <>
    {/* sending props using consumer compo  */}
    <h1>Consumer()Method</h1>
      <fname.Provider value={"Imran"}>
        <lname.Provider value={"Ahmad"}>
            <ContextapiA />
        </lname.Provider>
      </fname.Provider>
      {/* sending props using consumer compo end  */}

      {/* sending props using useContext */}
      <h3>useContext()Method</h3>
      <Age.Provider value={24}>
        <Strength.Provider value={"Debugging"}>
        <ContextapiA />
        </Strength.Provider>
      </Age.Provider>
    </>
  );
}

export default App;
export { fname,lname,Age,Strength }; // Export the context to be used in other components
