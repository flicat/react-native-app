/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';

// 登录页
import Login from './src/component/login';
// 欢迎页
import Start from './src/component/start';
// 路由列表
import Router from './src/router';

export default class App extends Component {
    constructor() {
        super();

        this.state = {
            goPage: false,      // 定时跳转
            isLogin: false       // 是否已经登录
        }
    }

    componentDidMount() {
        // 2秒后跳转
        setTimeout(() => {
            this.setState({
                goPage: true
            });
        }, 2000)
    }

    render() {
        return (this.state.goPage ?
            this.state.isLogin ?
                // 如果已经登录则跳转到首页
                <Router/> :
                // 未登录则跳转到登录页
                <Login/> :
            // 开场图片
            <Start/>)
    }
}


