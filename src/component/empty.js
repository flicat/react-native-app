/*!
 * @author liyuelong1020@gmail.com
 * @date 2018/1/31 031
 * @description 数据为空
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


export default class NetworkError extends Component {
    render () {
        return (
            <View style={styles.wrap}>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrap: {
        flex: 1,
        width: getWidth(1080),
        height: getWidth(138),
        paddingLeft: getWidth(37),
        paddingRight: getWidth(30),
        backgroundColor: '#fddbd9',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    }
});