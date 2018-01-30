/*!
 * @author liyuelong1020@gmail.com
 * @date 2018/1/29 029
 * @description 登录
 */

import {NavigationActions} from 'react-navigation';
import React, {Component} from 'react';
import {
    View,
    Text,
    Button
} from 'react-native';

// TODO 登录方法
async function userLogin() {
    return true;
}

const styles = {
    layout: {
        flex: 1,
        backgroundColor: '#ffeeff'
    }
};

// 登录组件
export default class Login extends Component {
    constructor(props) {
        super(props);
        this.login = this.login.bind(this);
    }

    login() {
        let navigation = this.props.navigation;

        // 点击登录
        userLogin().then(result => {
            if (result) {

                const resetAction = NavigationActions.reset({
                    index: 0,
                    actions: [
                        NavigationActions.navigate({routeName: 'Index'})
                    ]
                });

                navigation.dispatch(resetAction);
            }
        });
    }

    render() {
        return <View style={styles.layout}>
            <Text>Hello Login !</Text>
            <Button title="Login" onPress={() => this.login()}>Login</Button>
        </View>
    }
}
