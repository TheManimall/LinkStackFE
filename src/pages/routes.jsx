import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import LinkPage from './LinkPage'
import CreatePage from './CreatePage';
import DetailPage from './DetailPage';
import AuthPage from './AuthPage';

export const useRoutes = isAuth => {
  if (isAuth) {
    return (
      <Switch>
        <Route path="/links">
          <LinkPage />
        </Route>
        <Route path="/create">
          <CreatePage />
        </Route>
        <Route path="/detail/:id">
          <DetailPage />
        </Route>
        <Redirect to="/create" />
      </Switch>
    )
  }

  return (
    <Switch>
      <Route path="/" exact>
        <AuthPage />
      </Route>
      <Redirect to="/" />
    </Switch>
  )
}