import React from 'react';
import { Route, Switch } from 'react-router';
import MainPage from '../Pages/MainPage';

const MainRouter = () => {
  return (
    <Switch>
      <Route path="/project-applekorea" component={MainPage} exact></Route>
      <Route
        render={({ location }) => (
          <div style={{ color: 'white' }}>
            <span>{`${location.pathname} `}</span>
            <span>페이지는 존재하지 않습니다{':('}</span>
          </div>
        )}
      />
    </Switch>
  );
};

export default MainRouter;
