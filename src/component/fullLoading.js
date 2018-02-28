/*!
 * @author liyuelong1020@gmail.com
 * @date 2018/1/31 031
 * @description loading遮罩
 */

import React, {Component} from 'react';

import {
    StyleSheet,
    View,
    Modal,
    ActivityIndicator
} from 'react-native';


export default class FullLoading extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <Modal animationType="fade" transparent={true} visible={true}>
                <View style={styles.wrap}>
                    <ActivityIndicator size="large"/>
                </View>
            </Modal>
        );
    }
}

const styles = StyleSheet.create({
    wrap: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(255,255,255,0.5)'
    }
});