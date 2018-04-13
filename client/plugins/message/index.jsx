import React,{ Component } from 'react';

import './index.less';

const iconType = {
    info:(<i className="iconfont message-info">&#xe8be;</i>),
    success:(<i className="iconfont message-success">&#xe602;</i>),
    error:(<i className="iconfont message-error">&#xe71a;</i>)
} 

class PluginMessage extends Component { 
    constructor(props){
        super(props);
        this.state = {
            content:""
        }
    }
    info(content){
        this.setState({
            content
        })
    }
    render(){
        // const icon = iconType[type];
                
        return(
            <div>
                <div className="plugin-message">
                    <span>      
                    {
                        this.state.content
                    }                                                       
                    </span> 
                </div>   
                
            </div>   

        )
    } 
} 
export default PluginMessage;