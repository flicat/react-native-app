/*!
 * @author liyuelong1020@gmail.com
 * @date 2018/1/29 029
 * @description 欢迎页
 */

import React, {Component} from 'react';
import {getWidth, getHeight} from '../plugin/getSize';
import {
    StyleSheet,
    View,
    WebView,
} from 'react-native';

// 网络错误提示信息
import NetworkErr from '../component/networkError';
// 头部导航
import TopNav from '../component/topNav';



export default class NewsInfo extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let params = this.props.navigation.state.params;

        return (
            <View style={styles.wrap}>
                <TopNav title={params.title} navigation={this.props.navigation}/>
                <WebView style={styles.webView} source={{uri: 'http://120.79.90.233:8080/qxhzz/' + params.uri}} />
                <NetworkErr/>
            </View>
        )
    }
}

// 样式表
const styles = StyleSheet.create({
    wrap: {
        flex: 1,
        alignItems: 'stretch',
        justifyContent: 'flex-start',
        backgroundColor: '#efeff4'
    },
    webView: {
        flex: 1,
        backgroundColor: '#fff'
    }
});
