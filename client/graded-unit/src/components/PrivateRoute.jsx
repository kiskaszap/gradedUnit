import React from 'react';
import Login from '../pages/Login';
import { useContext } from 'react';
import { AppContext } from './AppWrapper';

const PrivateRoute = (props) => {
  const { isAdmin, isUser } = useContext(AppContext);

  if (isAdmin || isUser) {
    return <>{props.route}</>;
  } else {
    return <Login />;
  }
};

export default PrivateRoute;

