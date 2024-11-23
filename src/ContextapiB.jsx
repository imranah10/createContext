import React, { useContext } from 'react';
import { fname, lname ,Age,Strength} from './App'; // Import the context from App

const ContextapiB = () => {
  const age= useContext(Age)
  const stre= useContext(Strength)
  return (
    <div>
       
      <fname.Consumer>
        {(fname) => {
          return (
            <lname.Consumer>
              {
                (lname) => {
                  return (
                    <h2>My Name is {fname} {lname}</h2> // Display the context value
                  )
                }
              }
            </lname.Consumer>
          );
        }}
      </fname.Consumer>
        
      <h1>I am {age} Years old,My Strength is:{stre}</h1>
      
    </div>
  );
}

export default ContextapiB;
