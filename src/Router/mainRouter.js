import React from 'react';
import { Route, Switch } from 'react-router';
import Home from '../Pages/Home';
import Mac from '../Pages/Mac';
import Ipad from '../Pages/Ipad';
import Iphone from '../Pages/Iphone';
import Watch from '../Pages/Watch';
import Music from '../Pages/Music';
import Support from '../Pages/Support';
import Bag from '../Pages/Bag';
import NotFound from '../Pages/NotFound';
import SiteMap from '../Pages/SiteMap';

const MainRouter = () => {
  const BASE_URL = '/project-applekorea';
  return (
    <Switch>
      <Route path={`${BASE_URL}`} component={Home} exact />
      <Route path={`${BASE_URL}/mac`} component={Mac} exact />
      <Route path={`${BASE_URL}/ipad`} component={Ipad} />
      <Route path={`${BASE_URL}/iphone`} component={Iphone} />
      <Route path={`${BASE_URL}/watch`} component={Watch} />
      <Route path={`${BASE_URL}/music`} component={Music} />
      <Route path={`${BASE_URL}/bag`} component={Bag} />
      <Route path={`${BASE_URL}/support`} component={Support} />
      <Route path={`${BASE_URL}`} component={SiteMap} />
      <Route render={() => <NotFound />} />
    </Switch>
  );
};

export default MainRouter;
