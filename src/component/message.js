/*!
 * @author liyuelong1020@gmail.com
 * @date 2018/1/29 029
 * @description 消息列表
 */

import React, {Component} from 'react';

import RN, {View, Text, Button} from 'react-native';

export default class Index extends Component {
    render() {
        return <View style={{flex: 1, backgroundColor: '#eeffee'}}>
            <Text>消息列表</Text>
            <Button title="Back" onPress={() => this.props.navigation.goBack()} />
        </View>
    }
}
