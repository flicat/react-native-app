/*!
 * @author liyuelong1020@gmail.com
 * @date 2018/1/31 031
 * @description 数据为空
 */

import React, {Component} from 'react';
import {getWidth, getHeight} from '../plugin/getSize';
import {
    StyleSheet,
    View,
    Text,
    ImageBackground
} from 'react-native';


export default class Empty extends Component {
    constructor() {
        super();
    }
    render () {
        return (
            <View style={styles.wrap}>
                <ImageBackground style={styles.emptyBg} source={require('../assets/images/bg-empty.png')}>
                    <View style={styles.emptyBg}/>
                </ImageBackground>
                <Text style={styles.emptyText}>暂无相关数据</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrap: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: getHeight(200)
    },
    emptyBg: {
        width: getWidth(430),
        height: getWidth(421)
    },
    emptyText: {
        marginTop: getWidth(36),
        fontSize: getWidth(36),
        color: '#333'
    }
});