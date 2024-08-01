import React from 'react';
import { Button } from 'react-bootstrap';


const JumBotron = () => {
  return (
    <div className="jumbotron">
      <h1>A Warm Welcome!</h1>
      <p>
        This is a simple hero unit, a simple jumbotron-style component for calling
        extra attention to featured content or information.
      </p>
      <p>
        <Button bsStyle="primary">Call to acction</Button>
      </p>
    </div>);
}

export default JumBotron;