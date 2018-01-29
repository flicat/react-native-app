/*!
 * @author liyuelong1020@gmail.com
 * @date 2018/1/29 029
 * @description 欢迎页
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    ImageBackground,
    Image
} from 'react-native';


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
    render() {
        return (<View style={style.view}>
            <ImageBackground source={require('../assets/images/start.jpg')} style={style.bg}/>
        </View>)
    }
}
