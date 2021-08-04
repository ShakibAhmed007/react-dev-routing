import React from 'react';
import { Route } from 'react-router-dom';

const Welcome = () => {
  return (
    <div>
      <p>Welcome Works!!! And also with nested route </p>
      <Route path="/welcome/new-user">
        <p>Welcome New User using nested route</p>
      </Route>
    </div>
  );
};

export default Welcome;
