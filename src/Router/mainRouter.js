import React from 'react';
import { Route, Switch } from 'react-router';
import HomePage from '../Pages/HomePage';
import MacPage from '../Pages/MacPage';
import IPadPage from '../Pages/IPadPage';
import IPhonePage from '../Pages/IPhonePage';
import WatchPage from '../Pages/WatchPage';
import MusicPage from '../Pages/MusicPage';
import SupportPage from '../Pages/SupportPage';
import BagPage from '../Pages/BagPage';
import SiteMapPage from '../Pages/SiteMapPage';
import NotFound from '../Pages/NotFound';

const MainRouter = () => {
  const BASE_URL = '/project-applekorea';
  return (
    <Switch>
      <Route path={`${BASE_URL}`} component={HomePage} exact />
      <Route path={`${BASE_URL}/mac`} component={MacPage} exact />
      <Route path={`${BASE_URL}/ipad`} component={IPadPage} />
      <Route path={`${BASE_URL}/iphone`} component={IPhonePage} />
      <Route path={`${BASE_URL}/watch`} component={WatchPage} />
      <Route path={`${BASE_URL}/music`} component={MusicPage} />
      <Route path={`${BASE_URL}/bag`} component={BagPage} />
      <Route path={`${BASE_URL}/support`} component={SupportPage} />
      <Route path={`${BASE_URL}/sitemap`} component={SiteMapPage} />
      <Route render={() => <NotFound />} />
    </Switch>
  );
};

export default MainRouter;
