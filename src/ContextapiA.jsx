import React from 'react';
import ContextapiB from './ContextapiB'; // Import the ContextapiB component

const ContextapiA = () => {
  return (
    <div>
      <h1>Context A</h1>
      <ContextapiB /> {/* Use ContextapiB here to consume the context */}
    </div>
  );
}

export default ContextapiA;
