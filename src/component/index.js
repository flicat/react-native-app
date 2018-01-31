/*!
 * @author liyuelong1020@gmail.com
 * @date 2018/1/29 029
 * @description 首屏
 */

import React, {Component} from 'react';
import {getWidth, getHeight} from '../module/getSize';
import {
    StyleSheet,
    View,
    Text,
    Image,
    ScrollView,
    TouchableHighlight
} from 'react-native';

// 网络错误提示信息
import NetworkErr from './networkError';


// TODO 获取消息
async function getMsg() {
    let data = await new Promise(function (resolve, reject) {
        setTimeout(() => {
            resolve(true);
        }, 2000)
    });
    return data;
}

// 顶部banner
class Top extends Component {
    constructor(props) {
        super(props);

        this.state = {
            message: null
        };
    }

    componentDidMount() {
        getMsg().then((result) => {
            this.setState({
                message: result
            });
        });
    }

    render() {
        return (
            <View style={styles.bannerWrap}>
                <Image source={require('../assets/images/bg-index.jpg')} style={styles.banner}/>
                <TouchableHighlight onPress={() => this.props.goUrl('Message')} style={styles.msgBtn}>
                    {
                        this.state.message ?
                            <Image source={require('../assets/images/icon-msg-active.png')} style={styles.iconMsg}/> :
                            <Image source={require('../assets/images/icon-msg.png')} style={styles.iconMsg}/>
                    }
                </TouchableHighlight>
            </View>
        )
    }
}

// 中间菜单
class Menu extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.firstRow}>
                <TouchableHighlight style={styles.column} onPress={() => this.props.goUrl('Message')}>
                    <View style={styles.columnItem}>
                        <Image source={require('../assets/images/icon-i-1.png')} style={styles.columnIcon}/>
                        <Text style={styles.columnText}>河道信息</Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight style={styles.column} onPress={() => this.props.goUrl('Message')}>
                    <View style={styles.columnItem}>
                        <Image source={require('../assets/images/icon-i-2.png')} style={styles.columnIcon}/>
                        <Text style={styles.columnText}>巡河汇总</Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight style={styles.column} onPress={() => this.props.goUrl('Message')}>
                    <View style={styles.columnItem}>
                        <Image source={require('../assets/images/icon-i-3.png')} style={styles.columnIcon}/>
                        <Text style={styles.columnText}>事件统计</Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight style={styles.column} onPress={() => this.props.goUrl('Message')}>
                    <View style={styles.columnItem}>
                        <Image source={require('../assets/images/icon-i-4.png')} style={styles.columnIcon}/>
                        <Text style={styles.columnText}>综合考核</Text>
                    </View>
                </TouchableHighlight>
            </View>
        )
    }
}

// 常用应用
class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ScrollView>
                <View style={styles.title}>
                    <Text style={styles.titleText}>常用应用</Text>
                </View>
                <View style={styles.row}>
                    <TouchableHighlight style={styles.column} onPress={() => this.props.goUrl('Message')}>
                        <View style={styles.columnItem}>
                            <Image source={require('../assets/images/icon-i-5.png')} style={styles.columnIcon}/>
                            <Text style={styles.columnText}>开始巡河</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.column} onPress={() => this.props.goUrl('Message')}>
                        <View style={styles.columnItem}>
                            <Image source={require('../assets/images/icon-i-6.png')} style={styles.columnIcon}/>
                            <Text style={styles.columnText}>排污口信息</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.column} onPress={() => this.props.goUrl('Message')}>
                        <View style={styles.columnItem}>
                            <Image source={require('../assets/images/icon-i-7.png')} style={styles.columnIcon}/>
                            <Text style={styles.columnText}>快速上报</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.column} onPress={() => this.props.goUrl('Message')}>
                        <View style={styles.columnItem}>
                            <Image source={require('../assets/images/icon-i-8.png')} style={styles.columnIcon}/>
                            <Text style={styles.columnText}>地理信息</Text>
                        </View>
                    </TouchableHighlight>
                </View>
                <View style={styles.row}>
                    <TouchableHighlight style={styles.column} onPress={() => this.props.goUrl('Message')}>
                        <View style={styles.columnItem}>
                            <Image source={require('../assets/images/icon-i-9.png')} style={styles.columnIcon}/>
                            <Text style={styles.columnText}>热点信息</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.column} onPress={() => this.props.goUrl('Message')}>
                        <View style={styles.columnItem}>
                            <Image source={require('../assets/images/icon-i-10.png')} style={styles.columnIcon}/>
                            <Text style={styles.columnText}>河长名录</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.column} onPress={() => this.props.goUrl('Message')}>
                        <View style={styles.columnItem}>
                            <Image source={require('../assets/images/icon-i-11.png')} style={styles.columnIcon}/>
                            <Text style={styles.columnText}>我的事件</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.column} onPress={() => this.props.goUrl('Message')}>
                        <View style={styles.columnItem}>
                            <Image source={require('../assets/images/icon-i-12.png')} style={styles.columnIcon}/>
                            <Text style={styles.columnText}>我的河道</Text>
                        </View>
                    </TouchableHighlight>
                </View>
                <View style={styles.row}>
                    <TouchableHighlight style={styles.column} onPress={() => this.props.goUrl('Message')}>
                        <View style={styles.columnItem}>
                            <Image source={require('../assets/images/icon-i-13.png')} style={styles.columnIcon}/>
                            <Text style={styles.columnText}>我的日志</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.column} onPress={() => this.props.goUrl('Message')}>
                        <View style={styles.columnItem}>
                            <Image source={require('../assets/images/icon-i-14.png')} style={styles.columnIcon}/>
                            <Text style={styles.columnText}>个人信息</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.column} onPress={() => this.props.goUrl('Message')}>
                        <View style={styles.columnItem}>
                            <Image source={require('../assets/images/icon-i-15.png')} style={styles.columnIcon}/>
                            <Text style={styles.columnText}>事件管理</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.column} onPress={() => this.props.goUrl('Message')}>
                        <View style={styles.columnItem}>
                            <Image source={require('../assets/images/icon-i-16.png')} style={styles.columnIcon}/>
                            <Text style={styles.columnText}>巡河管理</Text>
                        </View>
                    </TouchableHighlight>
                </View>
            </ScrollView>
        )
    }
}


export default class Index extends Component {
    constructor(props) {
        super(props);

        this.goUrl = this.goUrl.bind(this);
    }

    goUrl(name) {
        this.props.navigation.navigate(name);
    }

    render() {
        return (
            <View style={styles.wrap}>
                <Top goUrl={this.goUrl}/>
                <Menu goUrl={this.goUrl}/>
                <App goUrl={this.goUrl}/>
                <NetworkErr/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    wrap: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'stretch',
        justifyContent: 'flex-start',
    },

    bannerWrap: {
        width: getWidth(1080),
        height: getWidth(536),
        backgroundColor: '#1b8fdf'
    },
    banner: {
        width: getWidth(1080),
        height: getWidth(536),
        resizeMode: 'contain'
    },
    msgBtn: {
        position: 'absolute',
        paddingHorizontal: getWidth(30),
        paddingVertical: getWidth(21),
        right: 0,
        top: 0
    },
    iconMsg: {
        width: getWidth(63),
        height: getWidth(54),
        resizeMode: 'contain'
    },


    firstRow: {
        paddingTop: getWidth(67),
        paddingBottom: getWidth(40),
        borderBottomWidth: getWidth(45),
        borderBottomColor: '#f8f8f8',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    row: {
        paddingTop: getWidth(67),
        paddingBottom: getWidth(40),
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    column: {
        flex: 1,
    },
    columnItem: {
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    columnIcon: {
        width: getWidth(102),
        height: getWidth(85),
        resizeMode: 'contain'
    },
    columnText: {
        marginTop: getWidth(26),
        color: '#333',
        fontSize: getWidth(36),
        fontWeight: 'bold'
    },

    title: {
        height: getWidth(92),
        paddingLeft: getWidth(30),
        borderBottomWidth: 1,
        borderBottomColor: '#e8e8e8',
        justifyContent: 'center'
    },
    titleText: {
        borderLeftWidth: 2,
        borderLeftColor: '#4ea8eb',
        paddingLeft: getWidth(20),
        color: '#333',
        height: getWidth(38),
        lineHeight: getWidth(42),
        fontSize: getWidth(38)
    }

});