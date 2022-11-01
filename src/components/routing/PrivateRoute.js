import React from 'react';
import { useSelector } from 'react-redux';
import { Route, useNavigate } from 'react-router-dom';

const PrivateRoute = ({ Component, ...rest }) => {
  const auth = useSelector((state) => state.auth);
  const navigate = useNavigate();
  <Route
    {...rest}
    rander={(props) =>
      !auth.isAuthenticated && !auth.loading ? (
        navigate('login')
      ) : (
        <Component {...props} />
      )
    }
  />;
};

export default PrivateRoute;
