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
    Text,
    Image,
    FlatList,
    SegmentedControlIOS,
    TouchableWithoutFeedback, AlertIOS
} from 'react-native';

// 网络错误提示信息
import NetworkErr from '../component/networkError';
// 头部导航
import TopNav from '../component/topNav';
// loading遮罩
import FullLoading from '../component/fullLoading';
// 列表为空
import Empty from '../component/empty';
import NewsInfo from "./newsInfo";


// 获取事件列表
async function getNewsList() {
    let res;
    let url = 'http://120.79.90.233:8080/qxhzz/app/getHotNews.action';

    let params = {
        uid: 407,            // uid
    };

    url = [url, Object.keys(params).map(key => [key, params[key]].join('=')).join('&')].join('?');

    try {

        res = await fetch(url);

    } catch (e) {
        AlertIOS.alert('', '接口错误！\ngetHotNews.action', [{text: 'OK', onPress: () => null}])
    }

    let data = await res.json();

    if (data && data.detail && data.detail.status === 1) {
        return Array.isArray(data.detail.hotNews) ? data.detail.hotNews : [];
    } else {
        AlertIOS.alert('', data.content, [{text: 'OK', onPress: () => null}]);
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
            case '通知公告':
                nav = 'notice';
                break;
            case '河道信息':
                nav = 'river_info';
                break;
            case '工作动态':
                nav = 'work_info';
                break;
            case '治理成效':
                nav = 'effect';
                break;
        }

        this.props.setTab(nav);
    }

    render() {
        return (
            <View style={styles.topTab}>
                <SegmentedControlIOS
                    style={styles.topTabItem}
                    values={['通知公告', '河道信息', '工作动态', '治理成效']}
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

    render() {
        return (
            <View>
                <FlatList
                    style={{paddingHorizontal: getWidth(30)}}
                    data={this.props.data}
                    ListEmptyComponent={Empty}
                    keyExtractor={item => item.idx}
                    ItemSeparatorComponent={({highlighted}) => (
                        <View style={{borderBottomWidth: StyleSheet.hairlineWidth, borderBottomColor: '#ddd'}}/>
                    )}
                    renderItem={({item}) => {
                        return (
                            <TouchableWithoutFeedback onPress={() => this.goEventInfo(item.html)}>
                                <View style={styles.eventItem}>
                                    <View style={styles.eventPhoto}>
                                        <Image source={{uri: item.photo}} style={styles.eventPhoto} resizeMode="cover"/>
                                    </View>

                                    <View style={styles.eventRight}>
                                        <Text style={styles.eventTitle}>{item.theme}</Text>
                                        <Text style={styles.eventDecs}>{item.content}</Text>
                                        <View style={styles.eventBottom}>
                                            <Text
                                                style={styles.eventText}>{item.updateTime}</Text>
                                        </View>
                                    </View>
                                </View>
                            </TouchableWithoutFeedback>
                        )
                    }}
                />
            </View>
        )
    }
}

// 通知公告列表
class NoticeList extends List {
    constructor(props) {
        super(props);
    }

    goEventInfo(uri) {
        if (uri) {
            this.props.navigation.navigate('NewsInfo', {uri, title: '通知公告'});
        }
    }
}

// 河道信息列表
class RiverInfoList extends List {
    constructor(props) {
        super(props);
    }

    goEventInfo(uri) {
        if (uri) {
            this.props.navigation.navigate('NewsInfo', {uri, title: '河道信息'});
        }
    }
}

// 工作动态列表
class WorkInfoList extends List {
    constructor(props) {
        super(props);
    }

    goEventInfo(uri) {
        if (uri) {
            this.props.navigation.navigate('NewsInfo', {uri, title: '工作动态'});
        }
    }
}

// 治理成效列表
class EffectList extends List {
    constructor(props) {
        super(props);
    }

    goEventInfo(uri) {
        if (uri) {
            this.props.navigation.navigate('NewsInfo', {uri, title: '治理成效'});
        }
    }
}


export default class NewsList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tab: 'notice', // notice 通知公告 river_info 河道信息 work_info 工作动态 effect 治理成效
            notice: [],
            river_info: [],
            work_info: [],
            effect: [],
            isReady: false
        };
    }

    setTab(tab) {
        this.setState({tab});
    }

    componentDidMount() {
        getNewsList().then(data => {
            let notice = [];
            let river_info = [];
            let work_info = [];
            let effect = [];

            data.forEach(item => {
                if (item.type === 1) {
                    notice.push(item);
                }
                if (item.type === 0) {
                    river_info.push(item);
                }
                if (item.type === 4) {
                    work_info.push(item);
                }
                if (item.type === 5) {
                    effect.push(item);
                }
            });

            this.setState({
                notice,
                river_info,
                work_info,
                effect,
            });
        }).then(() => {
            this.setState({
                isReady: true
            });
        })
    }


    render() {
        return (
            <View style={styles.wrap}>
                <TopNav title={'热点新闻'} navigation={this.props.navigation}/>
                <TopTab setTab={tab => this.setTab(tab)}/>
                {this.state.tab === 'notice' &&
                <NoticeList data={this.state.notice} navigation={this.props.navigation}/>}
                {this.state.tab === 'river_info' &&
                <RiverInfoList data={this.state.river_info} navigation={this.props.navigation}/>}
                {this.state.tab === 'work_info' &&
                <WorkInfoList data={this.state.work_info} navigation={this.props.navigation}/>}
                {this.state.tab === 'effect' &&
                <EffectList data={this.state.effect} navigation={this.props.navigation}/>}
                <FullLoading visible={!this.state.isReady}/>
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
    eventRight: {
        width: getWidth(706),
        height: getWidth(213),
    },
    eventTitle: {
        fontSize: getWidth(36),
        marginBottom: getWidth(36 / 2),
        color: '#333'
    },
    eventDecs: {
        fontSize: getWidth(30),
        lineHeight: getWidth(30 * 1.2),
        height: getWidth(30 * 1.2 * 3),
        overflow: 'hidden',
        color: '#666'
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

});
