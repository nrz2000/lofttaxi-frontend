import React from 'react';
import {
  BrowserRouter,
  Redirect,
  Switch,
  Route,
} from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getToken } from 'modules/auth/selectors';
import Header from 'components/Header';
import Box from '@material-ui/core/Box';
import { theme } from 'loft-taxi-mui-theme';
import { ThemeProvider } from '@material-ui/core/styles';

import Map from 'views/Map';
import Login from 'views/Login';
import Profile from 'views/Profile';
import BasePrivateRoute from 'components/BasePrivateRoute';

App.propTypes = {
  token: PropTypes.string.isRequired,
};

function App({ token }) {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Box
          display="flex"
          flexDirection="column"
          width="100%"
          height="100vh"
          minHeight={600}
        >
          {token ? <Header /> : null}
          <Switch>
            <Route
              path="/authorization"
              component={Login}
            />
            <Route
              path="/registration"
              component={Login}
            />
            <BasePrivateRoute path="/map" component={Map} />
            <BasePrivateRoute path="/profile" component={Profile} />
            <Redirect from="/" to="/authorization" />
          </Switch>
        </Box>
      </ThemeProvider>
    </BrowserRouter>
  );
}

const mapStateToProps = (state) => ({
  token: getToken(state),
});

export default connect(mapStateToProps)(App);
