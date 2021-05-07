import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import MusicPage from './Pages/MusicPage/MusicPage';
import SideBar from './components/SideBar/SideBar';

const Routes = () => {
  return (
    <BrowserRouter>
      <SideBar />
      <Switch>
          <Route path="/" exact component={MusicPage}/>
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
