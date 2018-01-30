/*!
 * @author liyuelong1020@gmail.com
 * @date 2018/1/29 029
 * @description 登录
 */

import {NavigationActions} from 'react-navigation';
import React, {Component} from 'react';
import {getWidth, getHeight} from '../module/getSize';
import LinearGradient from 'react-native-linear-gradient';
import {
    StyleSheet,
    View,
    Text,
    Image,
    TextInput,
    TouchableOpacity
} from 'react-native';

// TODO 登录方法
async function userLogin() {
    return true;
}


// logo
class Logo extends Component {
    render() {
        return (
            <View style={styles.bannerWrap}>
                <Image source={require('../assets/images/bg-login.png')} style={styles.banner}/>
            </View>
        )
    }
}

// 表单
class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            remember: true
        };

        this.login = this.login.bind(this);
    }

    login() {
        // 点击登录
        userLogin().then(result => {
            if (result) {
                this.props.callback();
            }
        });
    }

    render() {
        return (
            <View style={styles.formWrap}>
                <View style={styles.formControl}>
                    <Image source={require('../assets/images/icon-user.png')} style={styles.formControlIcon}/>
                    <TextInput onChangeText={(text) => this.setState({username: text})} value={this.state.username}
                               placeholder="用户名" style={styles.formControlInput} placeholderTextColor="#999999"
                               underlineColorAndroid="transparent"/>
                </View>
                <View style={styles.formControl}>
                    <Image source={require('../assets/images/icon-psw.png')} style={styles.formControlIcon}/>
                    <TextInput onChangeText={(text) => this.setState({password: text})} value={this.state.password}
                               secureTextEntry={true} placeholder="密码" style={styles.formControlInput}
                               placeholderTextColor="#999999" underlineColorAndroid="transparent"/>
                </View>
                <TouchableOpacity onPress={() => this.setState({remember: !this.state.remember})}
                                  style={styles.checkBox}>
                    {
                        this.state.remember ?
                            <Image source={require('../assets/images/icon-checked.png')} style={styles.iconCheck}/> :
                            <Image source={require('../assets/images/icon-checkbox.png')} style={styles.iconCheck}/>
                    }
                    <Text style={styles.checkText}>记住密码</Text>
                </TouchableOpacity>
                <LinearGradient colors={['#078ae5', '#03b3d9']}
                                start={{x: 0, y: 0}}
                                end={{x: 1, y: 0}} style={styles.btnWrap}>
                    <Text onPress={() => this.login()} style={styles.btn}>登录</Text>
                </LinearGradient>
            </View>
        )
    }
}

// 登录组件
export default class Login extends Component {
    constructor(props) {
        super(props);
        this.goIndex = this.goIndex.bind(this);
    }

    goIndex() {
        this.props.navigation.dispatch(NavigationActions.reset({
            index: 0,
            actions: [
                NavigationActions.navigate({routeName: 'Index'})
            ]
        }));
    }

    render() {
        return (
            <LinearGradient
                colors={['#ffffff', '#e5e5e5']}
                start={{x: 0, y: 0}}
                end={{x: 0, y: 1}}
                style={styles.wrap}>
                <Logo/>
                <Form callback={this.goIndex}/>
            </LinearGradient>
        )
    }
}


const styles = StyleSheet.create({
    wrap: {
        flex: 1,
        alignItems: 'stretch',
        justifyContent: 'flex-start'
    },
    bannerWrap: {
        paddingHorizontal: getWidth(120)
    },
    banner: {
        resizeMode: 'contain',
        width: getWidth(621),
        height: getHeight(299),
        alignSelf: 'center',
        marginTop: getHeight(231)
    },

    formWrap: {
        marginTop: getHeight(100),
        paddingHorizontal: getWidth(120)
    },
    formControl: {
        flexWrap: 'nowrap',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginTop: getWidth(86),
        borderBottomColor: '#999999',
        borderBottomWidth: 1
    },
    formControlIcon: {
        width: getWidth(80),
        height: getWidth(80),
        marginVertical: getWidth(14),
        marginLeft: getWidth(14),
        marginRight: getWidth(28),
        resizeMode: 'contain'
    },
    formControlInput: {
        flex: 1,
        height: getWidth(109),
        padding: 0,
        fontSize: getWidth(48)
    },

    checkBox: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        height: getWidth(44),
        marginTop: getWidth(37),
        marginBottom: getWidth(131)
    },
    iconCheck: {
        resizeMode: 'contain',
        width: getWidth(44),
        height: getWidth(44)
    },
    checkText: {
        fontSize: getWidth(34),
        height: getWidth(44),
        lineHeight: getWidth(44),
        marginLeft: getWidth(15)
    },

    btnWrap: {
        height: getWidth(146),
        borderRadius: getWidth(73)
    },
    btn: {
        height: getWidth(146),
        lineHeight: getWidth(146),
        textAlign: 'center',
        color: '#ffffff',
        fontSize: getWidth(64),
        fontWeight: 'bold'
    }
});
