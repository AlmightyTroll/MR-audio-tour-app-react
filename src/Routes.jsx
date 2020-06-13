import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import TrailsLandingComponent from './Trails/LandingPageComponent/TrailsLandingComponent';
import CanyonViewTrailOverview from './Trails/CanyonViewTrail/CanyonViewTrailOverview';
import CanyonViewStopsComponent from './Trails/CanyonViewTrail/CanyonViewStopsComponent';
// import MenuComponent from './Menu';



export default function Routes() {
  return (
    <Router>
      <div>
        {/* <MenuComponent /> */}

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
            <Route path="/canyon-view/:id">
                <CanyonViewStopsComponent />
            </Route>
            <Route path="/canyon-view">
                <CanyonViewTrailOverview />
            </Route>
            <Route path="/">
                <TrailsLandingComponent />
            </Route>
        </Switch>
      </div>
    </Router>
  );
}