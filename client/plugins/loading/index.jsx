import React,{ Component } from 'react';
import "./index.less";
export default class PluginLoading extends Component {
    render(){
        return(
            <div className="loading-wrapper">
                <div className='loading-container'>
                    <span className='loading-dot'></span>
                    <span className='loading-dot'></span>
                    <span className='loading-dot'></span>
                </div>
            </div>
        )
    }
}