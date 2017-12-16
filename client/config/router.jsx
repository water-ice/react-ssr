import React from 'react';
import {
  Route,
  Redirect
} from 'react-router-dom'

import PageIndex from '../pages/index/index'

export default () => [
  <Route key="1" path="/" component={ PageIndex } exact/>,
  ]