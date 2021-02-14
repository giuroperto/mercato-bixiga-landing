import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Components/pages/UnderConstruction/UnderConstruction';
import Menu from './Components/pages/Menu/Menu';
import BottomFooter from './Components/features/BottomFooter/BottomFooter';

import ROUTES from './constants/routes';

const AllRoutes = (props) => {

  return (
    <>
      <Switch>
        <Route path={ROUTES.HOME} exact component={Home} />
        <Route path={ROUTES.MENU} exact component={Menu} />
      </Switch>
      <BottomFooter />
    </>
  )
}

export default AllRoutes;