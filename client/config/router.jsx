import React from 'react';
import {
  Route,
  Redirect
} from 'react-router-dom'

import PageIndex from '../pages/index/index'

import PageBattle from '../pages/battle/index'

import PageBattlePicture from '../pages/battle_detail/picture';
import PageBattleName from '../pages/battle_detail/name';

import PageLogin from '../pages/account/login';
import PageRegister from '../pages/account/register';

import PageTestApi from '../pages/test_api/index'

import PageCooperation from '../pages/cooperation/index'
export default () => [
  <Route key="1" path="/" component={ PageIndex } exact/>,
  <Route key="2" path="/battle" component={ PageBattle } />,
  <Route key="3" path="/battle_name" component={ PageBattleName } />,
  <Route key="4" path="/battle_picture" component={ PageBattlePicture } />,
  <Route key="5" path="/account/" render={()=><Redirect to="/account/login" />} exact />,
  <Route key="6" path="/account/login" component={PageLogin} />,
  <Route key="7" path="/account/register" component ={PageRegister} />, 
  <Route key="8" path="/cooperation" component ={PageCooperation} />, 
  <Route key="9" path="/test_api" component ={PageTestApi} /> 
]