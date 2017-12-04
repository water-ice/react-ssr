import React from 'react';
import {
  Route,
  Redirect
} from 'react-router-dom'

import PageIndex from '../pages/index/index'
import PageContest from '../pages/battle/index'
import PageContestDetail from '../pages/battle-detail/index'

import PageLogin from '../pages/account/login';
import PageRegister from '../pages/account/register';

export default () => [
  <Route key="1" path="/" component={ PageIndex } exact/>,
  <Route key="2" path="/contest" component={ PageContest } />,
  <Route key="3" path="/contest_detail" component={ PageContestDetail } />,
  <Route key="4" path="/account/" render={()=><Redirect to="/account/login" />} exact />,
  <Route key="5" path="/account/login" component={PageLogin} />,
  <Route key="6" path="/account/register" component ={PageRegister} /> 
]