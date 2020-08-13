import React from 'react';
import {
  Switch,
  Route
} from "react-router-dom";
import {
  Container
} from 'react-bootstrap';

import CatsList from './cats-list';
import CatDetails from './cat-details';

const Cats = ({ match }) => (
  <Container className="py-4">
    <Switch>
      <Route path={`${match.path}:catId`} component={CatDetails}></Route>
      <Route path={`${match.path}`} component={CatsList}></Route>
    </Switch>
  </Container>
);

export default Cats;