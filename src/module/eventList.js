/*!
 * @author liyuelong1020@gmail.com
 * @date 2018/1/29 029
 * @description 欢迎页
 */

import React, {Component} from 'react';
import {getWidth, getHeight} from '../plugin/getSize';
import {
    AlertIOS,
    StyleSheet,
    View,
    Text,
    Image,
    FlatList,
    SegmentedControlIOS,
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

// 获取事件列表
async function getEventList(event_status, page) {
    let res;
    let url = 'http://120.79.90.233:8080/qxhzz/app/getRvEventListForEventMgt.action';

    let params = {
        uid: 407,            // uid
        rows: 10,
        event_status,       // 事件状态。0:全部;1:待处理;2:我上报;5:已处理
        page                 // 当前显示的页数,默认显示第1页
    };

    url = [url, Object.keys(params).map(key => [key, params[key]].join('=')).join('&')].join('?');

    try {

        res = await fetch(url);

    } catch (e) {
        AlertIOS.alert('',  '接口错误！\ngetRvEventListForEventMgt.action', [{text: 'OK', onPress: () => null}])
    }

    let data =  await res.json();

    if(data && data.detail && data.detail.status === 1) {
        return Array.isArray(data.detail.rvEventList) ? data.detail.rvEventList : [];
    }  else {
        AlertIOS.alert('',  data.content, [{text: 'OK', onPress: () => null}]);
        return [];
    }

}

// 头部tab菜单
class TopTab extends Component {
    constructor(props) {
        super(props);

        this.setTab = this.setTab.bind(this);
    }

    setTab(tab) {
        let nav;
        switch (tab) {
            case '已上报':
                nav = 'report';
                break;
            case '待处置':
                nav = 'active';
                break;
            case '已办结':
                nav = 'done';
                break;
        }

        this.props.setTab(nav);
    }

    render() {
        return (
            <View style={styles.topTab}>
                <SegmentedControlIOS
                    style={styles.topTabItem}
                    values={['已上报', '待处置', '已办结']}
                    selectedIndex={0}
                    onValueChange={this.setTab}
                    tintColor="#219ef7"/>
            </View>
        )
    }
}

// 事件列表
class List extends Component {
    constructor(props) {
        super(props);
    }

    // 下拉刷新
    refresh () {
        this.page = 1;
        this.setState({
            isRefresh: true
        });
        getEventList(this.type, this.page++).then(data => {
            if(data.length) {
                this.setState({
                    data,
                });
            }
        }).then(() => {
            this.setState({
                isRefresh: false
            });
        });
    }

    // 上拉加载
    reached () {
        this.setState({
            isReady: false
        });
        getEventList(this.type, this.page++).then(data => {
            if(data.length) {
                this.setState({
                    data: this.state.data.concat(data),
                });
            }
        }).then(() => {
            this.setState({
                isReady: true
            });
        });
    }

    componentDidMount() {
        this.reached();
    }

    goEventInfo(id) {
        this.props.navigation.navigate('EventInfo', {id});
    }

    render() {
        return (
            <View style={styles.eventWrap}>
                <FlatList
                    style={{paddingHorizontal: getWidth(30)}}
                    data={this.state.data}
                    refreshing={this.state.isRefresh}
                    onRefresh={() => this.refresh()}
                    onEndReached={() => this.reached()}
                    onEndReachedThreshold={0}
                    ListEmptyComponent={Empty}
                    keyExtractor={item => item.event_code}
                    ItemSeparatorComponent={({highlighted}) => (
                        <View style={{borderBottomWidth: StyleSheet.hairlineWidth, borderBottomColor: '#ddd'}}/>
                    )}
                    renderItem={({item}) => {
                        return (
                            <TouchableWithoutFeedback onPress={() => this.goEventInfo(item.event_code)}>
                                <View style={styles.eventItem}>
                                    <View style={styles.eventPhoto}>
                                        <Image
                                            source={{uri: 'http://120.79.90.233:8080/imageserver/qxhzz/uploadfile/' + item.img_path}}
                                            style={styles.eventPhoto} resizeMode="cover"/>
                                        {item.event_status == 1 && <Image style={styles.eventType}
                                                                          source={require('../assets/images/icon-event-1.png')}
                                                                          resizeMode="contain"/>}
                                        {item.event_status == 2 && <Image style={styles.eventType}
                                                                          source={require('../assets/images/icon-event-2.png')}
                                                                          resizeMode="contain"/>}
                                        {item.event_status == 3 && <Image style={styles.eventType}
                                                                          source={require('../assets/images/icon-event-3.png')}
                                                                          resizeMode="contain"/>}
                                    </View>

                                    <View style={styles.eventRight}>
                                        <Text style={styles.eventTitle}>{item.rv_name}</Text>
                                        <Text style={styles.eventDecs}>{item.event_describe}</Text>
                                        <View style={styles.eventBottom}>
                                            <Text
                                                style={styles.eventText}>{item.report_time}</Text>
                                            <Text style={styles.eventText}>所属区县：<Text
                                                style={[styles.eventText, styles.eventEm]}>{item.ad_name}</Text></Text>
                                        </View>
                                        {item.event_status === '1' && <Image style={styles.eventState}
                                                                             source={require('../assets/images/icon-state-active.png')}
                                                                             resizeMode="contain"/>}
                                        {item.event_status === '5' && <Image style={styles.eventState}
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

// 已上报事件列表
class ReportList extends List {
    constructor(props) {
        super(props);

        this.page = 1;
        this.type = 2;

        this.state = {
            data: [],
            isRefresh: false,
            isReady: false
        };
    }
}

// 待处置事件列表
class ActiveList extends List {
    constructor(props) {
        super(props);

        this.page = 1;
        this.type = 1;

        this.state = {
            data: [],
            isRefresh: false,
            isReady: false
        };
    }

}

// 已办结事件列表
class DoneList extends List {
    constructor(props) {
        super(props);

        this.page = 1;
        this.type = 5;

        this.state = {
            data: [],
            isRefresh: false,
            isReady: false
        };
    }
    
}


export default class EventList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tab: 'report', // report 已上报 active 待处置 done 已办结
        };
    }

    setTab(tab) {
        this.setState({tab});
    }

    render() {
        return (
            <View style={styles.wrap}>
                <TopNav title={'事件管理'} navigation={this.props.navigation}/>
                <TopTab setTab={tab => this.setTab(tab)}/>
                {this.state.tab === 'report' && <ReportList navigation={this.props.navigation}/>}
                {this.state.tab === 'active' && <ActiveList navigation={this.props.navigation}/>}
                {this.state.tab === 'done' && <DoneList navigation={this.props.navigation}/>}
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
    topTab: {
        paddingHorizontal: getWidth(30),
        marginBottom: getWidth(24)
    },
    topTabItem: {
        height: getWidth(88)
    },

    eventWrap: {
        flex: 1
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

});
