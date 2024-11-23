import React from 'react';
import { fname, lname } from './App'; // Import the context from App

const ContextapiB = () => {
  return (
    <div>
      <h1>Context B</h1>
      <fname.Consumer>
        {(username) => {
          return (
            <lname.Consumer>
              {
                (lname) => {
                  return (
                    <h2>{username}:{lname}</h2> // Display the context value
                  )
                }
              }
            </lname.Consumer>
          );
        }}
      </fname.Consumer>
    </div>
  );
}

export default ContextapiB;
