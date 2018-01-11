import React from 'react';
import {
  Route,
  Redirect,
  Switch
} from 'react-router-dom'

import PageIndex from '../pages/index/index';
import PageBattleIndex from '../pages/battle/index';
import PageBattleDetailBackground from '../pages/battle_detail/background';
import PageBattleDetailFinal from '../pages/battle_detail/final';
import PageBattleDetailPreliminary from '../pages/battle_detail/preliminary';
import PageBattleDetailRequire from '../pages/battle_detail/require';
import PageBattleDetailResult from '../pages/battle_detail/result';

import PageUserIndex from '../pages/user/index';
import PageRegisterDesignerSuccess from '../pages/user/register_designer_success';
import PageBindWX from '../pages/user/bind_wei_xin';
import PageOriginalPromise from '../pages/user/original_promise';
import PageCustomerSupplyMessage from '../pages/user/customer_supply';
import PageRegisterCustomerSuccess from '../pages/user/register_customer_success';
import PageUserLoginThird from '@pages/user/login_third';


import PageWorkDetail from '@pages/work';
import PageSubmitWorkFirst from '@pages/work/submit_first';


import PageWhaleDesignAgreement from '../pages/terms/whale_design_agreement';

import PageTest from '@pages/test/test'

import Page404 from '@pages/404';
export default class RouterMap extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return ( 
      <Switch>
        <Route key="1" path="/" component={PageIndex} exact />,

        // 赛事部分
        <Route key="battle" path="/battle" component={PageBattleIndex} />,

        <Route key="battle_brief" path="/battledetail/brief/id/:id" component={PageBattleDetailRequire} />,
        <Route key="battle_background" path="/battledetail/background/id/:id" component={PageBattleDetailBackground} />,
        <Route key="battle_preliminary" path="/battledetail/preliminary/id/:id" component={PageBattleDetailPreliminary} />,
        <Route key="battle_final" path="/battledetail/final/id/:id" component={PageBattleDetailFinal} />,
        <Route key="battle_result" path="/battledetail/result/id/:id" component={PageBattleDetailResult} />,
        {/* <Route key="battle_detail" path="/battledetail" render={(props) => <Redirect to={{pathname:'/battledetail/brief',state:{contestId:props.location.state.contestId}}} />} />, */}

        // 登录注册部分
        <Route key="user" path="/user" component={PageUserIndex} exact />,
        <Route key="welcome_designer" path="/user/welcome_designer" component={PageRegisterDesignerSuccess} />,
        <Route key="wechat_binding" path="/user/wechat_binding" component={PageBindWX} />,
        <Route key="info_added" path="/user/info_added" component={PageCustomerSupplyMessage} />,
        <Route key="copyright_vow" path="/user/copyright_vow" component={PageOriginalPromise} />,
        <Route key="welcome_boss" path="/user/welcome_boss" component={PageRegisterCustomerSuccess} />,
        <Route key='login_third' path="/user/login_third" component={PageUserLoginThird} />,

        // 作品详情
        <Route key="workdetail" path="/work/detail/:id" component={PageWorkDetail} />,

        // 参展初赛
        <Route key="submit_work_first" path="/work/submit/:id" component={PageSubmitWorkFirst} />,
        

        // 条款
        <Route key="agreement" path="/terms/agreement" component={PageWhaleDesignAgreement} />,
                
        <Route key="test" path="/test" component={PageTest} />,
        
        <Route component={Page404} />,
      </Switch>
   
    )
  }
}