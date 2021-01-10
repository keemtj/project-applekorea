import React from 'react';
import { Route, Switch } from 'react-router';
import Home from '../Pages/Home';
import MacBookPro from '../Pages/MacBookPro';

const MainRouter = () => {
  return (
    <Switch>
      <Route path="/project-applekorea" component={Home} exact />
      <Route path="/project-applekorea/mac" component={MacBookPro} exact />
      <Route path="/project-applekorea/ipad" />
      <Route path="/project-applekorea/iphone" />
      <Route path="/project-applekorea/watch" />
      <Route path="/project-applekorea/music" />
      <Route path="/project-applekorea/bag" />
      <Route path="/project-applekorea/support" />
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
