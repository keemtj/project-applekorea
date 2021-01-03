import React from 'react';
import { Route, Switch } from 'react-router';
import MainPage from '../Pages/MainPage';

const MainRouter = () => {
  return (
    <Switch>
      <Route path="/" component={MainPage} exact></Route>
      <Route path="/project-weather"></Route>
      <Route
        render={({ location }) => (
          <div>
            <span>{` ${location.pathname}`}</span>
            <span>페이지는 존재하지 않습니다{':('}</span>
          </div>
        )}
      />
    </Switch>
  );
};

export default MainRouter;
