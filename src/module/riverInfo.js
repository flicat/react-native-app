/*!
 * @author liyuelong1020@gmail.com
 * @date 2018/1/29 029
 * @description 首屏
 */

import React, {Component} from 'react';
import {getWidth, getHeight} from '../plugin/getSize';
import {
    Animated,
    Easing,
    StyleSheet,
    View,
    Text,
    Image,
    ScrollView,
    FlatList,
    ImageBackground,
    SegmentedControlIOS,
    TouchableOpacity,
    WebView,
    TouchableWithoutFeedback
} from 'react-native';

// 网络错误提示信息
import NetworkErr from '../component/networkError';
// 头部导航
import TopNav from '../component/topNav';
// loading遮罩
import FullLoading from '../component/fullLoading';
// 列表为空
import Empty from '../component/empty';


// TODO 获取河流信息
async function getInfo(param) {
    await new Promise(function (resolve, reject) {
        setTimeout(() => resolve(true), 1000);
    });

    return {}
}


// TODO 获取事件列表
async function getEventList() {
    await new Promise(function (resolve, reject) {
        setTimeout(() => resolve(true), 1000);
    });

    return [{
        "photo": "http://img.ivsky.com/img/tupian/pre/201711/22/xingkong.jpg",
        "title": "东源县支流",
        "decs": "河面水颜色变换，初步认定水污染严重，河面水颜色变色变换，初步认定水污色变换，初步认定水污色变换，初步认定水污换。",
        "date": 1519977817063,
        "location": "东源县",
        "state": 1,
        "type": 1,
        "id": 1
    }, {
        "photo": "http://img.ivsky.com/img/tupian/pre/201711/22/xingkong.jpg",
        "title": "东源县支流",
        "decs": "河面水颜色变换，初步认定水污染严重，河面水颜色变色变换，初步认定水污色变换，初步认定水污色变换，初步认定水污换。",
        "date": 1519977817063,
        "location": "东源县",
        "state": 0,
        "type": 1,
        "id": 2
    }, {
        "photo": "http://img.ivsky.com/img/tupian/pre/201711/22/xingkong.jpg",
        "title": "东源县支流",
        "decs": "河面水颜色变换，初步认定水污染严重，河面水颜色变色变换，初步认定水污色变换，初步认定水污色变换，初步认定水污换。",
        "date": 1519977817063,
        "location": "东源县",
        "state": 0,
        "type": 0,
        "id": 3
    }, {
        "photo": "http://img.ivsky.com/img/tupian/pre/201711/22/xingkong.jpg",
        "title": "东源县支流",
        "decs": "河面水颜色变换，初步认定水污染严重，河面水颜色变色变换，初步认定水污色变换，初步认定水污色变换，初步认定水污换。",
        "date": 1519977817063,
        "location": "东源县",
        "state": 1,
        "type": 2,
        "id": 4
    }, {
        "photo": "http://img.ivsky.com/img/tupian/pre/201711/22/xingkong.jpg",
        "title": "东源县支流",
        "decs": "河面水颜色变换，初步认定水污染严重，河面水颜色变色变换，初步认定水污色变换，初步认定水污色变换，初步认定水污换。",
        "date": 1519977817063,
        "location": "东源县",
        "state": 0,
        "type": 1,
        "id": 5
    }, {
        "photo": "http://img.ivsky.com/img/tupian/pre/201711/22/xingkong.jpg",
        "title": "东源县支流",
        "decs": "河面水颜色变换，初步认定水污染严重，河面水颜色变色变换，初步认定水污色变换，初步认定水污色变换，初步认定水污换。",
        "date": 1519977817063,
        "location": "东源县",
        "state": 0,
        "type": 2,
        "id": 6
    }, {
        "photo": "http://img.ivsky.com/img/tupian/pre/201711/22/xingkong.jpg",
        "title": "东源县支流",
        "decs": "河面水颜色变换，初步认定水污染严重，河面水颜色变色变换，初步认定水污色变换，初步认定水污色变换，初步认定水污换。",
        "date": 1519977817063,
        "location": "东源县",
        "state": 0,
        "type": 1,
        "id": 7
    }, {
        "photo": "http://img.ivsky.com/img/tupian/pre/201711/22/xingkong.jpg",
        "title": "东源县支流",
        "decs": "河面水颜色变换，初步认定水污染严重，河面水颜色变色变换，初步认定水污色变换，初步认定水污色变换，初步认定水污换。",
        "date": 1519977817063,
        "location": "东源县",
        "state": 1,
        "type": 3,
        "id": 8
    }, {
        "photo": "http://img.ivsky.com/img/tupian/pre/201711/22/xingkong.jpg",
        "title": "东源县支流",
        "decs": "河面水颜色变换，初步认定水污染严重，河面水颜色变色变换，初步认定水污色变换，初步认定水污色变换，初步认定水污换。",
        "date": 1519977817063,
        "location": "东源县",
        "state": 1,
        "type": 3,
        "id": 9
    }, {
        "photo": "http://img.ivsky.com/img/tupian/pre/201711/22/xingkong.jpg",
        "title": "东源县支流",
        "decs": "河面水颜色变换，初步认定水污染严重，河面水颜色变色变换，初步认定水污色变换，初步认定水污色变换，初步认定水污换。",
        "date": 1519977817063,
        "location": "东源县",
        "state": 1,
        "type": 2,
        "id": 10
    }]
}

// TODO 获取巡河日志
async function getLogList() {
    await new Promise(function (resolve, reject) {
        setTimeout(() => resolve(true), 1000);
    });

    return [{"id": 1, "name": "河源三江源河段", "date": 1520326376238}, {
        "id": 2,
        "name": "河源三江源河段",
        "date": 1520326376238
    }, {"id": 3, "name": "河源三江源河段", "date": 1520326376238}, {
        "id": 4,
        "name": "河源三江源河段",
        "date": 1520326376238
    }, {"id": 5, "name": "河源三江源河段", "date": 1520326376238}, {
        "id": 6,
        "name": "河源三江源河段",
        "date": 1520326376238
    }, {"id": 7, "name": "河源三江源河段", "date": 1520326376238}, {
        "id": 8,
        "name": "河源三江源河段",
        "date": 1520326376238
    }, {"id": 9, "name": "河源三江源河段", "date": 1520326376238}, {"id": 10, "name": "河源三江源河段", "date": 1520326376238}];
}


// TODO 获取一河一策
async function getArticle() {
    await new Promise(function (resolve, reject) {
        setTimeout(() => resolve(true), 1000);
    });

    return {};
}


// 获取时间字符串
function getDateFromStamp(stamp = Date.now(), format = 'Y-M-D') {
    let date = new Date(stamp),
        year = date.getFullYear(),
        month = date.getMonth() + 1,
        day = date.getDate(),
        hour = date.getHours(),
        minute = date.getMinutes(),
        second = date.getSeconds();

    let paddingStart = function (str) {
        str = String(str);
        if (str.length < 2) {
            return '0' + str;
        }
        return str;
    };

    return format.replace(/Y+/g, paddingStart(year))
        .replace(/M+/g, paddingStart(month))
        .replace(/D+/g, paddingStart(day))
        .replace(/H+/g, paddingStart(hour))
        .replace(/I+/g, paddingStart(minute))
        .replace(/S+/g, paddingStart(second));
}

// 头部选项卡
class TopTab extends Component {
    constructor(props) {
        super(props);

        this.setTab = this.setTab.bind(this);
    }

    setTab(tab) {
        let nav;
        switch (tab) {
            case '基础信息':
                nav = 'base';
                break;
            case '信息公开':
                nav = 'info';
                break;
            case '一河一策':
                nav = 'article';
                break;
        }

        this.props.setTab(nav);
    }

    render() {
        return (
            <View style={styles.topTab}>
                <SegmentedControlIOS
                    style={styles.topTabItem}
                    values={['基础信息', '信息公开', '一河一策']}
                    selectedIndex={0}
                    onValueChange={this.setTab}
                    tintColor="#219ef7"/>
            </View>
        )
    }
}


// 地图信息
class Map extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.mapWrap}>

            </View>
        )
    }
}

// 河流信息
class River extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.river}>
                <View style={styles.title}>
                    <Image style={styles.riverIcon} source={require('../assets/images/icon-river.png')}
                           resizeMode="contain"/>
                    <Text style={styles.titleText}>镇江</Text>
                    <TouchableWithoutFeedback>
                        <ImageBackground source={require('../assets/images/icon-followed.png')} style={styles.follow}>
                            <View style={styles.follow}/>
                        </ImageBackground>
                    </TouchableWithoutFeedback>
                </View>

                <View style={styles.riverInfo}>
                    <View style={styles.riverRow}>
                        <Text style={styles.infoTitle}>河道编号：</Text>
                        <Text style={styles.infoText}>HDXH0001</Text>
                        <Text style={styles.infoTitle}>所属区县：</Text>
                        <Text style={styles.infoText}>东源县</Text>
                    </View>
                    <View style={styles.riverRow}>
                        <Text style={styles.infoTitle}>河道起点：</Text>
                        <Text style={styles.infoText}>珊瑚沙水库</Text>
                        <Text style={styles.infoTitle}>河道等级：</Text>
                        <Text style={styles.infoText}>区级</Text>
                    </View>
                    <View style={styles.riverRow}>
                        <Text style={styles.infoTitle}>河道终点：</Text>
                        <Text style={styles.infoText}>富阳界</Text>
                        <Text style={styles.infoTitle}>河道长度：</Text>
                        <Text style={styles.infoText}>24.3km</Text>
                    </View>
                    <View style={styles.riverRow}>
                        <Text style={styles.infoTitle}>河长职责：</Text>
                        <Text
                            style={styles.infoText}>各级河长负责牵头阻止展开包干河道水质和污染源现状调查，制定水环境治理实施方案，推动重点工程项目落实，协调解决重点难点问题，确保完成任务。</Text>
                    </View>
                    <View style={styles.riverRow}>
                        <Text style={styles.infoTitle}>整治目标：</Text>
                        <Text style={styles.infoText}>水清，流畅，岸绿，景美，宜居</Text>
                    </View>
                </View>

            </View>
        )
    }
}

// 河长信息
class Riverer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.river}>
                <View style={styles.title}>
                    <Image style={styles.rivererIcon} source={require('../assets/images/icon-riverer.png')}
                           resizeMode="contain"/>
                    <Text style={styles.titleText}>河长信息</Text>
                </View>

                <View style={styles.rivererInfo}>
                    <View style={styles.rivererRow}>
                        <View style={styles.rivererSubRow2}>
                            <Text style={styles.rivererTitle}>区级河长</Text>
                            <Text style={styles.rivererText}>付高温</Text>
                        </View>
                        <View style={styles.rivererSubRow2}>
                            <Text style={styles.rivererTitle}>河道警长</Text>
                            <Text style={styles.rivererText}>王卫星</Text>
                            <TouchableWithoutFeedback>
                                <Image source={require('../assets/images/icon-tell.png')} resizeMode="contain"
                                       style={styles.iconTell}/>
                            </TouchableWithoutFeedback>
                        </View>
                    </View>
                    <View style={styles.rivererSubRow1}>
                        <Text style={styles.rivererTitle}>河长职务</Text>
                        <Text style={styles.rivererText}>区委常委、常委副市长</Text>
                    </View>
                    <View style={styles.rivererRow}>
                        <View style={styles.rivererSubRow2}>
                            <Text style={styles.rivererTitle}>联系部门</Text>
                            <Text style={styles.rivererText}>区水务局</Text>
                        </View>
                        <View style={styles.rivererSubRow2}>
                            <Text style={styles.rivererTitle}>联系方式</Text>
                            <Text style={styles.rivererText}>曲丽芳</Text>
                            <TouchableWithoutFeedback>
                                <Image source={require('../assets/images/icon-tell.png')} resizeMode="contain"
                                       style={styles.iconTell}/>
                            </TouchableWithoutFeedback>
                        </View>
                    </View>
                    <View style={styles.rivererSubRow1}>
                        <Text style={styles.rivererTitle}>统一监督电话</Text>
                        <TouchableOpacity activeOpacity={1}>
                            <Text style={styles.rivererText}>0571-8781852</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </View>
        )
    }
}

// 下级河流信息
class SubRiver extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.river}>
                <View style={styles.title}>
                    <Image style={styles.subRiverIcon} source={require('../assets/images/icon-sub-river.png')}
                           resizeMode="contain"/>
                    <Text style={styles.titleText}>下级河道</Text>
                </View>

                <View style={styles.rivererInfo}>
                    <View style={styles.rivererRow}>
                        <View style={styles.rivererSubRow2}>
                            <Text style={styles.rivererTitle}>下级河道</Text>
                            <TouchableOpacity activeOpacity={1}>
                                <Text style={styles.riverName}>秦淮河xx河段</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.rivererSubRow2}>
                            <Text style={styles.rivererTitle}>下级河长</Text>
                            <Text style={styles.rivererText}>王菲和</Text>
                            <TouchableWithoutFeedback>
                                <Image source={require('../assets/images/icon-tell.png')} resizeMode="contain"
                                       style={styles.iconTell}/>
                            </TouchableWithoutFeedback>
                        </View>
                    </View>
                    <View style={styles.rivererRow}>
                        <View style={styles.rivererSubRow2}>
                            <Text style={styles.rivererTitle}>联系部门</Text>
                            <Text style={styles.rivererText}>街镇水务局</Text>
                        </View>
                        <View style={styles.rivererSubRow2}>
                            <Text style={styles.rivererTitle}>联系人</Text>
                            <Text style={styles.rivererText}>张梦亿</Text>
                            <TouchableWithoutFeedback>
                                <Image source={require('../assets/images/icon-tell.png')} resizeMode="contain"
                                       style={styles.iconTell}/>
                            </TouchableWithoutFeedback>
                        </View>
                    </View>
                    <View style={styles.rivererRow}>
                        <View style={styles.rivererSubRow2}>
                            <Text style={styles.rivererTitle}>下级河道</Text>
                            <TouchableOpacity activeOpacity={1}>
                                <Text style={styles.riverName}>秦淮河xx河段</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.rivererSubRow2}>
                            <Text style={styles.rivererTitle}>下级河长</Text>
                            <Text style={styles.rivererText}>田营长</Text>
                            <TouchableWithoutFeedback>
                                <Image source={require('../assets/images/icon-tell.png')} resizeMode="contain"
                                       style={styles.iconTell}/>
                            </TouchableWithoutFeedback>
                        </View>
                    </View>
                    <View style={styles.rivererRow}>
                        <View style={styles.rivererSubRow2}>
                            <Text style={styles.rivererTitle}>联系部门</Text>
                            <Text style={styles.rivererText}>街镇水务局</Text>
                        </View>
                        <View style={styles.rivererSubRow2}>
                            <Text style={styles.rivererTitle}>联系人</Text>
                            <Text style={styles.rivererText}>李瑶</Text>
                            <TouchableWithoutFeedback>
                                <Image source={require('../assets/images/icon-tell.png')} resizeMode="contain"
                                       style={styles.iconTell}/>
                            </TouchableWithoutFeedback>
                        </View>
                    </View>
                </View>

            </View>
        )
    }
}

// 基础信息
class Base extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            translateValue: new Animated.Value(0)
        };
    }

    toggleInfo() {
        let toValue;

        if (this.state.isOpen) {
            toValue = 0;
        } else {
            toValue = getHeight(-1168);
        }

        Animated.timing(this.state.translateValue, {
            toValue,
            duration: 300,
            easing: Easing.linear,// 线性的渐变函数
        }).start();

        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
            <View style={styles.tabWrap}>
                <Map/>
                <View style={styles.infoWrap}>
                    <TouchableWithoutFeedback onPress={() => this.toggleInfo()}>
                        <Animated.View style={{
                            width: getWidth(1080),
                            height: getHeight(1920),
                            backgroundColor: '#fff',
                            transform: [{translateY: this.state.translateValue}]
                        }}>
                            <ImageBackground
                                style={styles.iconToggleWrap}
                                source={this.state.isOpen ? require('../assets/images/icon-arrow-down.png') : require('../assets/images/icon-arrow-up.png')}>
                                <View style={styles.iconToggle}/>
                            </ImageBackground>
                            <River/>
                            <Riverer/>
                            <SubRiver/>
                        </Animated.View>
                    </TouchableWithoutFeedback>
                </View>
            </View>

        )
    }
}


// 事件列表
class EventList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: null,
            isReady: false
        };
    }

    componentDidMount() {
        getEventList().then(data => {
            this.setState({
                data,
                isReady: true
            })
        });
    }

    goEventInfo(id) {
        this.props.navigation.navigate('EventInfo', {id});
    }

    render() {
        return (
            <View>
                <FlatList
                    style={{paddingHorizontal: getWidth(30)}}
                    data={this.state.data}
                    ListEmptyComponent={Empty}
                    keyExtractor={item => item.id}
                    ItemSeparatorComponent={({highlighted}) => (
                        <View style={{borderBottomWidth: StyleSheet.hairlineWidth, borderBottomColor: '#ddd'}}/>
                    )}
                    renderItem={({item}) => {
                        return (
                            <TouchableWithoutFeedback onPress={() => this.goEventInfo(item.id)}>
                                <View style={styles.eventItem}>
                                    <View style={styles.eventPhoto}>
                                        <Image
                                            source={{uri: item.photo}}
                                            style={styles.eventPhoto} resizeMode="cover"/>
                                        {item.type === 1 && <Image style={styles.eventType}
                                                                   source={require('../assets/images/icon-event-1.png')}
                                                                   resizeMode="contain"/>}
                                        {item.type === 2 && <Image style={styles.eventType}
                                                                   source={require('../assets/images/icon-event-2.png')}
                                                                   resizeMode="contain"/>}
                                        {item.type === 3 && <Image style={styles.eventType}
                                                                   source={require('../assets/images/icon-event-3.png')}
                                                                   resizeMode="contain"/>}
                                    </View>

                                    <View style={styles.eventRight}>
                                        <Text style={styles.eventTitle}>{item.title}</Text>
                                        <Text style={styles.eventDecs}>{item.decs}</Text>
                                        <View style={styles.eventBottom}>
                                            <Text
                                                style={styles.eventText}>{getDateFromStamp(item.date, 'Y-M-D H:I')}</Text>
                                            <Text style={styles.eventText}>所属区县：<Text
                                                style={[styles.eventText, styles.eventEm]}>{item.location}</Text></Text>
                                        </View>
                                        {item.state === 0 && <Image style={styles.eventState}
                                                                    source={require('../assets/images/icon-state-active.png')}
                                                                    resizeMode="contain"/>}
                                        {item.state === 1 && <Image style={styles.eventState}
                                                                    source={require('../assets/images/icon-state-done.png')}
                                                                    resizeMode="contain"/>}
                                    </View>
                                </View>
                            </TouchableWithoutFeedback>
                        )
                    }}
                />
                <FullLoading visible={!this.state.isReady}/>
            </View>
        )
    }
}

// 巡河日志
class LogList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: null,
            isReady: false,
            dateRange: 'week'       // week 本周 month 本月
        };
    }

    componentDidMount() {
        getLogList().then(data => {
            this.setState({
                data,
                isReady: true
            })
        });
    }

    setSelectRange(range) {
        this.setState({
            dateRange: range
        })
    }

    goLogInfo(id) {
        // this.props.navigation.navigate('LogInfo', {id});
    }

    render() {
        return (
            <View>
                <View style={styles.dateSelector}>
                    <TouchableOpacity activeOpacity={1} onPress={() => this.setSelectRange('week')}>
                        <Text
                            style={[styles.selectItem, this.state.dateRange === 'week' ? styles.selectItemActive : {}]}>本周</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={1} onPress={() => this.setSelectRange('month')}>
                        <Text
                            style={[styles.selectItem, this.state.dateRange === 'month' ? styles.selectItemActive : {}]}>本月</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.rowHead}>
                    <Text style={[styles.rowText, styles.rowTitle]}>巡查河段</Text>
                    <Text style={[styles.rowText, styles.rowDate]}>巡查日期</Text>
                </View>
                <FlatList
                    data={this.state.data}
                    ListEmptyComponent={Empty}
                    keyExtractor={item => item.id}
                    ItemSeparatorComponent={({highlighted}) => (
                        <View style={{borderBottomWidth: StyleSheet.hairlineWidth, borderBottomColor: '#ddd'}}/>
                    )}
                    renderItem={({item}) => {
                        return (
                            <TouchableWithoutFeedback onPress={() => this.goLogInfo(item.id)}>
                                <View style={[styles.rowHead, styles.rowItemHead]}>
                                    <Text style={[styles.rowText, styles.rowItemTitle]}>{item.name}</Text>
                                    <Text
                                        style={[styles.rowText, styles.rowItemDate]}>{getDateFromStamp(item.date, 'Y-M-D H:I')}</Text>
                                </View>
                            </TouchableWithoutFeedback>
                        )
                    }}
                />
                <FullLoading visible={!this.state.isReady}/>
            </View>
        )
    }
}


// 信息公开
class Info extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tab: 'event',  // event  log
            translateValue: new Animated.Value(getWidth(186))
        };

    }

    switchTab(tab) {
        Animated.timing(this.state.translateValue, {
            toValue: tab === 'log' ? getWidth(726) : getWidth(186),
            duration: 100,
            easing: Easing.linear,// 线性的渐变函数
        }).start();

        this.setState({tab});
    }

    render() {
        return (
            <View style={styles.tabWrap}>
                <View style={styles.tabTitle}>
                    <TouchableWithoutFeedback onPress={() => this.switchTab('event')}>
                        <View style={styles.tabItem}>
                            <Text
                                style={this.state.tab === 'event' ? styles.tabCurrentText : styles.tabText}>事件列表</Text>
                        </View>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={() => this.switchTab('log')}>
                        <View style={styles.tabItem}>
                            <Text style={this.state.tab === 'log' ? styles.tabCurrentText : styles.tabText}>巡河日志</Text>
                        </View>
                    </TouchableWithoutFeedback>
                    <Animated.View style={{
                        position: 'absolute',
                        left: 0,
                        top: getWidth(100),
                        width: getWidth(168),
                        borderBottomWidth: 2,
                        borderBottomColor: '#219ef7',
                        transform: [{translateX: this.state.translateValue}]
                    }}/>
                </View>

                {this.state.tab === 'event' && <EventList navigation={this.props.navigation}/>}
                {this.state.tab === 'log' && <LogList navigation={this.props.navigation}/>}

            </View>
        )
    }
}

// 一河一策
class Article extends Component {
    constructor(props) {
        super(props);

        this.state = {
            html: `<!DOCTYPE html>
                    <html>
                    <head>
                        <meta charset="utf-8">
                        <meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no">
                        <title>清新河长制</title>
                    </head>
                    <body>
                    <p style="font-size: 14px;">Here I am</p>
                    </body>
                    </html>`
        };
    }

    render() {
        return (
            <ScrollView style={styles.tabWrap}>
                <View>
                    <WebView
                        contentInset={{top: 0, left: 0, bottom: 0, right: 0}}
                        scalesPageToFit={true}
                        scrollEnabled={true}
                        bounces={true}
                        source={{html: this.state.html}}
                        style={{width: getWidth(1080), height: getHeight(1920)}}/>
                </View>
            </ScrollView>
        )
    }
}

export default class RiverInfo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: 0,//this.props.navigation.state.params.id,
            tab: 'base', // base 基础信息 info 信息公开 article 一河一策
        };

        this.setTab = this.setTab.bind(this);
    }

    setTab(tab) {
        this.setState({tab});
    }

    render() {
        return (
            <View style={styles.wrap}>
                <TopNav title={'河道详情'} navigation={this.props.navigation}/>
                <TopTab setTab={this.setTab}/>
                {this.state.tab === 'base' && <Base/>}
                {this.state.tab === 'info' && <Info navigation={this.props.navigation}/>}
                {this.state.tab === 'article' && <Article/>}
                <NetworkErr/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    wrap: {
        flex: 1,
        alignItems: 'stretch',
        justifyContent: 'flex-start',
        backgroundColor: '#efeff4'
    },
    topTab: {
        paddingHorizontal: getWidth(30),
        marginBottom: getWidth(24)
    },
    topTabItem: {
        height: getWidth(88)
    },
    tabWrap: {
        flex: 1,
        backgroundColor: '#fff'
    },
    tabTitle: {
        width: getWidth(1080),
        height: getWidth(108),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    tabItem: {
        width: getWidth(1080 / 2),
        height: getWidth(60),
        marginVertical: getWidth(24),
        alignItems: 'center',
        justifyContent: 'center',
        borderRightWidth: 1,
        borderRightColor: '#eee',
        overflow: 'hidden',
    },
    tabCurrentText: {
        fontSize: getWidth(38),
        textAlign: 'center',
        color: '#333',
    },
    tabText: {
        fontSize: getWidth(38),
        textAlign: 'center',
        color: '#a6a6a6',
    },
    mapWrap: {
        width: getWidth(1080),
        height: getWidth(1168),
        backgroundColor: '#dde5f1'
    },
    infoWrap: {
        flex: 1,
    },
    infoContent: {
        width: getWidth(1080),
        height: getHeight(1920),
        backgroundColor: '#fff',
        position: 'absolute',
        left: 0,
        top: 0,
    },
    iconToggleWrap: {
        width: getWidth(57),
        height: getWidth(32),
        marginTop: getWidth(10),
        alignSelf: 'center'
    },
    iconToggle: {
        width: getWidth(57),
        height: getWidth(32),
    },
    river: {
        paddingHorizontal: getWidth(30),
    },
    title: {
        width: getWidth(1020),
        height: getWidth(82),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    riverIcon: {
        width: getWidth(47),
        height: getWidth(34),
        marginRight: 5,
    },
    titleText: {
        fontSize: getWidth(38),
        color: '#000',
    },
    follow: {
        position: 'absolute',
        right: 0,
        top: getWidth(13),
        width: getWidth(59),
        height: getWidth(55),
    },
    riverInfo: {
        backgroundColor: '#f8f8f8',
        padding: getWidth(18)
    },
    riverRow: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        paddingVertical: getWidth(10)
    },
    infoTitle: {
        lineHeight: getWidth(42),
        fontSize: getWidth(30),
        color: '#a6a6a6',
    },
    infoText: {
        lineHeight: getWidth(42),
        fontSize: getWidth(30),
        color: '#333',
        flex: 1,
    },
    rivererIcon: {
        width: getWidth(48),
        height: getWidth(48),
        marginRight: 5,
    },
    rivererInfo: {
        borderLeftWidth: 1,
        borderTopWidth: 1,
        borderColor: '#e8e8e8',
    },
    rivererRow: {
        width: getWidth(1020),
        height: getWidth(82),
        flexDirection: 'row',
    },
    rivererSubRow1: {
        width: getWidth(1020),
        flexDirection: 'row',
        height: getWidth(82),
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingHorizontal: getWidth(30),
        borderRightWidth: 1,
        borderBottomWidth: 1,
        borderColor: '#e8e8e8',
    },
    rivererSubRow2: {
        width: getWidth(1020 / 2),
        flexDirection: 'row',
        height: getWidth(82),
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingHorizontal: getWidth(30),
        borderRightWidth: 1,
        borderBottomWidth: 1,
        borderColor: '#e8e8e8',
    },
    rivererTitle: {
        fontSize: getWidth(30),
        color: '#a6a6a6',
        marginRight: getWidth(36)
    },
    rivererText: {
        fontSize: getWidth(30),
        color: '#333',
    },
    iconTell: {
        width: getWidth(39),
        height: getWidth(39),
        position: 'absolute',
        right: getWidth(12),
        top: getWidth(24),
    },

    subRiverIcon: {
        width: getWidth(47),
        height: getWidth(42),
        marginRight: 5,
    },
    riverName: {
        fontSize: getWidth(30),
        color: '#219ef7',
    },


    eventItem: {
        paddingVertical: getWidth(40),
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
    },
    eventPhoto: {
        width: getWidth(284),
        height: getWidth(213),
    },
    eventType: {
        position: 'absolute',
        left: 0,
        top: 0,
        width: getWidth(88),
        height: getWidth(90),
    },
    eventRight: {
        width: getWidth(706),
        height: getWidth(213),
    },
    eventTitle: {
        fontSize: getWidth(36),
        marginBottom: getWidth(36 / 2),
        color: '#a6a6a6'
    },
    eventDecs: {
        fontSize: getWidth(30),
        lineHeight: getWidth(30 * 1.2),
        height: getWidth(30 * 1.2 * 3),
        overflow: 'hidden',
        color: '#333'
    },
    eventBottom: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    eventText: {
        fontSize: getWidth(30),
        lineHeight: getWidth(30 * 2),
        color: '#a6a6a6'
    },
    eventEm: {
        color: '#219ef7'
    },
    eventState: {
        position: 'absolute',
        right: 0,
        top: getWidth(-20),
        width: getWidth(122),
        height: getWidth(71),
    },

    dateSelector: {
        paddingTop: getWidth(31),
        paddingBottom: getWidth(26),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    selectItem: {
        paddingHorizontal: getWidth(30),
        height: getWidth(62),
        fontSize: getWidth(36),
        lineHeight: getWidth(62),
        color: '#a6a6a6',
        textAlign: 'center'
    },
    selectItemActive: {
        color: '#fff',
        backgroundColor: '#219ef7',
    },
    rowHead: {
        paddingHorizontal: getWidth(30),
        height: getWidth(103),
        backgroundColor: '#ecf4f9',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    rowItemHead: {
        backgroundColor: '#fff',
    },
    rowText: {
        height: getWidth(103),
        lineHeight: getWidth(103),
        color: '#666',
    },
    rowTitle: {
        width: getWidth(460),
        textAlign: 'center',
        fontSize: getWidth(36),
    },
    rowDate: {
        width: getWidth(430),
        fontSize: getWidth(36),
    },
    rowItemTitle: {
        width: getWidth(460),
        fontSize: getWidth(34),
        color: '#219ef7',
        textAlign: 'center',
    },
    rowItemDate: {
        width: getWidth(495),
        fontSize: getWidth(34),
        color: '#999',
    },
});