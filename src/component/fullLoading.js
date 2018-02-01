/*!
 * @author liyuelong1020@gmail.com
 * @date 2018/1/31 031
 * @description loading遮罩
 */

import React, {Component} from 'react';
import {getWidth, getHeight} from '../plugin/getSize';
import {
    Platform,
    Linking,
    NetInfo,
    StyleSheet,
    View,
    Text,
    Image,
    TouchableWithoutFeedback
} from 'react-native';

// 系统设置路径
const setting = Platform.select({
    ios: 'prefs:root=General&path=Network',
    android: 'android.settings.SETTINGS'
});

export default class NetworkError extends Component {
    constructor (props) {
        super(props);

        this.state = {
            isConnect: true,
            type: ''
        };

        this.connectionChange = this.connectionChange.bind(this);
        this.goSetting = this.goSetting.bind(this);
    }

    connectionChange (connectionInfo) {
        this.setState({
            isConnect: !/^(none|unknown)$/i.test(String(connectionInfo.type)),
            type: connectionInfo.type
        });
    }

    goSetting () {
        Linking.canOpenURL(setting).then(supported => {
            if (supported) {
                return Linking.openURL(setting);
            }
        });
    }

    componentDidMount () {
        NetInfo.getConnectionInfo().then((connectionInfo) => {
            this.setState({
                isConnect: !/^(none|unknown)$/i.test(String(connectionInfo.type)),
                type: connectionInfo.type
            });
        });
        NetInfo.addEventListener('connectionChange', this.connectionChange);
    }

    componentWillUnmount () {
        NetInfo.removeEventListener('connectionChange', this.connectionChange);
    }

    render () {
        return (
            !this.state.isConnect &&
            <TouchableWithoutFeedback onPress={() => this.goSetting()}>
                <View style={styles.wrap}>
                    <Image source={require('../assets/images/icon-error.png')} style={styles.iconErr}/>
                    <Text style={styles.tips}>网络不给力，请检查网络设置</Text>
                    <Image source={require('../assets/images/icon-arrow.png')} style={styles.iconArr}/>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = StyleSheet.create({
    wrap: {
        position: 'absolute',
        left: 0,
        top: 0,
        zIndex: 10,
        flex: 1,
        width: getWidth(1080),
        height: getWidth(138),
        paddingLeft: getWidth(37),
        paddingRight: getWidth(30),
        backgroundColor: '#fddbd9',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    iconErr: {
        width: getWidth(59),
        height: getWidth(59)
    },
    tips: {
        flex: 1,
        marginLeft: getWidth(30),
        fontSize: getWidth(42),
        color: '#000'
    },
    iconArr: {
        width: getWidth(25),
        height: getWidth(45),
        justifyContent: 'flex-end'
    }
});