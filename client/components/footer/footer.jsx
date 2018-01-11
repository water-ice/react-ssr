import React from 'react';
import { Link } from 'react-router-dom';

import '@style/component_footer.less';

export default class GlobalFooter extends React.Component {
  constructor() {
    super()
    this.state = {
      links:[
        { name:"天极网",url:"aaa"},
        { name:"设计大师",url:"bbb"},
        { name:"悦城",url:"ccc"},
        { name:"天极网1",url:"aaa"},
        { name:"设计大师2",url:"bbb"},
        { name:"悦城3",url:"ccc"},
        { name:"天极网4",url:"aaa"},
        { name:"设计大师5",url:"bbb"},
        { name:"悦城6",url:"ccc"},
        { name:"天极网7",url:"aaa"},
        { name:"设计大师8",url:"bbb"},
        { name:"悦城11",url:"ccc"},
        { name:"天极网212",url:"aaa"},
        { name:"设计大师323",url:"bbb"},
        { name:"悦城434",url:"ccc"},
        { name:"天极网545",url:"aaa"},
        { name:"设计大师566",url:"bbb"},
        { name:"设计大师68",url:"bbb"},
      ],
      isShowWXModal:false
    }
  }
  closeWXModal(){
    this.setState({
      isShowWXModal:false,
    })
  }
  showWXModal(){
    this.setState({
      isShowWXModal:true,
    })
  }
  render(){
    return(
      <footer className="component-footer">
        <div className="main-container pt70 clearfix">
          <div className="left">
            <img width="170" height="40" src={require('@image/footer_logo.png')} />
            <div className="plantform">
              <span className="icon-container wx-container mr10 hand">
                <i onClick={this.showWXModal.bind(this)} className="iconfont icon-wx">&#xe600;</i>
              </span>
              <span className="icon-container wb-container mr10">
                <a className="iconfont icon-weib" target="blank" href="https://weibo.com/u/6090681587">&#xe679;</a>
              </span>
              <span className="icon-container zh-container">
                <a className="iconfont icon-zh" target="blank" href="https://www.zhihu.com/org/jing-yu-she-ji-whaledesign/activities">&#xe6d1;</a>  
              </span>
            </div>
          </div>
          <ul className="docs">
            <li className="inline-block">
              <p className="leader">关于精于</p>
              <p className="link">团队介绍</p>
              <p className="link">设计师团</p>
              <p className="link">媒体报道</p>
              <p className="link">加入精于</p>
            </li>
            <li className="inline-block">
              <p className="leader">帮助中心</p>
              <p className="link">设计师进</p>
              <p className="link">企业进</p>
              <p className="link">常见问题</p>
            </li>
            <li className="inline-block">
              <p className="leader">服务支持</p>
              <p className="link">用户协议</p>
              <p className="link">免责声明</p>
              <p className="link">隐私声明</p>
              <p className="link">实名认证</p>
            </li>
            <li className="inline-block">
              <p className="leader">商业合作</p>
              <p className="link">设计外包</p>
              <p className="link">品牌合作</p>
              <p className="link">媒体合作</p>
              <p className="link">设计师入驻</p>
            </li>
            
          </ul>
          <div className="right contract">
            <p className="leader">联系我们</p>
            <p className="number">400-000-0000</p>
            <p className="working">工作时间：周一至周五&nbsp;(&nbsp;9:00--18:00&nbsp;)</p>
            <button className="service">在线客服</button>
          </div>
        </div>
        <hr/>
        <div className="main-container pb15">
          <p className="refers">
            友情链接:
            {
              this.state.links.map(item =>{
                return (<a key={item.name} href={item.url} target="blank">{item.name}&nbsp;|&nbsp;</a>)
              })
            }
          </p>
          <p className="refers">
          ©2016&nbsp;&nbsp;&nbsp;琢磨琢磨科技(北京)有限公司版权所有&nbsp;&nbsp;&nbsp;京ICP备16065657号-1
          </p>
        </div>
        <div className='modal' style={{display:this.state.isShowWXModal?'flex':'none'}}>
            <div className="modal-box">
              <i onClick={this.closeWXModal.bind(this)} className='iconfont icon-close'>&#xe633;</i>
              <h4 className='fs22 text-center'>精于微信公众号</h4>
              <img className="wx-img" width="200" height="200" src={require('@image/wx_service.png')} alt=""/>
              <p className='fs16 mt10 text-center'>关注精于设计微信公众号及时获取最新信息</p>
            </div>
        </div>
      </footer>
    )
  }
}