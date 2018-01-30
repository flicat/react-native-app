/*!
 * @author liyuelong1020@gmail.com
 * @date 2018/1/29 029
 * @description 欢迎页
 */

import {NavigationActions} from 'react-navigation';
import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    ImageBackground,
    Image
} from 'react-native';

// TODO 获取登录状态信息
async function getLoginState() {
    return false;
}

// 样式表
const style = StyleSheet.create({
    view: {
        backgroundColor: '#fff',
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'stretch'
    },
    bg: {
        flex: 1,
        resizeMode: Image.resizeMode.contain
    },
});

export default class Start extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLogin: false
        };
    }

    componentDidMount() {
        let navigation = this.props.navigation;

        getLoginState().then(result => {
            this.setState({
                isLogin: result
            });
        });

        setTimeout(() => {
            let routeName;

            if (this.state.isLogin) {
                routeName = 'Index';
            } else {
                routeName = 'Login';
            }

            const resetAction = NavigationActions.reset({
                index: 0,
                actions: [
                    NavigationActions.navigate({routeName: routeName})
                ]
            });

            navigation.dispatch(resetAction);

        }, 2000);
    }

    render() {
        return (<View style={style.view}>
            <ImageBackground source={require('../assets/images/start.jpg')} style={style.bg}/>
        </View>)
    }
}