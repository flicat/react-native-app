/*!
 * @author liyuelong1020@gmail.com
 * @date 2018/1/31 031
 * @description 头部导航
 */

import React, {Component} from 'react';
import {getWidth, getHeight} from '../plugin/getSize';
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableWithoutFeedback
} from 'react-native';


export default class NetworkError extends Component {
    constructor (props) {
        super(props);
    }

    back () {
        if(this.props.navigation) {
            this.props.navigation.goBack();
        }
    }

    render () {
        return (
            <View style={styles.wrap}>
                <Text style={styles.title}>{this.props.title}</Text>
                <TouchableWithoutFeedback onPress={() => this.back()}>
                    <View style={styles.btnWrap}>
                        <Image source={require('../assets/images/icon-back.png')} style={styles.iconBack}/>
                    </View>
                </TouchableWithoutFeedback>
                <View style={styles.rightMenu}>
                    {this.props.menu}
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrap: {
        width: getWidth(1080),
        height: getWidth(134),
        flexDirection: 'row',
        alignItems: 'center'
    },
    btnWrap: {
        position: 'absolute',
        zIndex: 10,
        left: 0,
        top: 0,
        paddingHorizontal: getWidth(30),
        height: getWidth(134),
        justifyContent: 'center'
    },
    iconBack: {
        width: getWidth(103),
        height: getWidth(38),
        resizeMode: 'contain'
    },
    title: {
        flex: 1,
        textAlign: 'center',
        fontSize: getWidth(48),
        color: '#000'
    },
    rightMenu: {
        position: 'absolute',
        zIndex: 10,
        right: 0,
        top: 0,
        height: getWidth(134),
        justifyContent: 'center'
    }
});