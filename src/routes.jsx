import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import MusicPage from './Pages/MusicPage/MusicPage';
import SideBar from './components/SideBar/SideBar';

const Routes = () => {
  return (
    <BrowserRouter>
      <SideBar />
      <Switch>
          <Route path="/music" exact component={MusicPage}/>
          <Route path="/page2" component={() => <h2>Page 2</h2>}/>
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
