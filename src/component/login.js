/*!
 * @author liyuelong1020@gmail.com
 * @date 2018/1/29 029
 * @description 登录
 */

import React, {Component} from 'react';
import Router from '../router';
import RN, {
    View,
    Text,
    Button
} from 'react-native';

// TODO 登录方法
function userLogin (callback) {
    callback(true)
}

// 登录组件
class Login extends Component {
    constructor (props) {
        super(props);
        this.login = this.login.bind(this);
    }

    login () {
        // 点击登录
        userLogin((result) => {
            this.props.callback(result);
        })
    }

    render() {
        return <View style={{flex: 1, backgroundColor: '#ffeeff'}}>
            <Text>Hello Login !</Text>
            <Button title="Login" onPress={this.login}>Login</Button>
        </View>
    }
}

export default class Index extends Component {
    constructor (props) {
        super(props);

        this.state = {
            isLogin: false         // 是否登录
        };

        this.setLoginState = this.setLoginState.bind(this);
    }

    // 登录回调函数
    setLoginState (isLogin) {
        this.setState({
            isLogin: isLogin
        });
    }

    render () {
        return (this.state.isLogin ? <Router /> : <Login callback={this.setLoginState} />)
    }
}
