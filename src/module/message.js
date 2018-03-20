/*!
 * @author liyuelong1020@gmail.com
 * @date 2018/1/29 029
 * @description 消息列表
 */

import React, {Component} from 'react';

import RN, {
    Alert,
    Button,
    View
} from 'react-native';

// 网络错误提示信息
import NetworkErr from '../component/networkError';
// 头部导航
import TopNav from '../component/topNav';
// loading遮罩
import FullLoading from '../component/fullLoading';
// 列表为空
import Empty from '../component/empty';

export default class Message extends Component {
    constructor (props) {
        super(props);
    }

    alert() {
        Alert.alert(
            '',
            'My Alert Msg',
            [
                // {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
                {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                {text: 'OK', onPress: () => console.log('OK Pressed')},
            ],
            { cancelable: false }
        )
    }

    render() {
        return (
            <View>
                <TopNav title={'消息列表'} navigation={this.props.navigation}/>
                <Button title="Alert" onPress={() => this.alert()} />
                <NetworkErr/>
            </View>
        );
    }
}

const styles = {
    viewPager: {
        flex: 1
    },
    pageStyle: {
        alignItems: 'center',
        padding: 20,
    }
};

