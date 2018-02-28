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
    TouchableWithoutFeedback
} from 'react-native';

// 网络错误提示信息
import NetworkErr from '../component/networkError';
// 头部导航
import TopNav from '../component/topNav';
// loading遮罩
import FullLoading from '../component/fullLoading';


// TODO 获取河流信息
async function getInfo(param) {
    await new Promise(function (resolve, reject) {
        setTimeout(() => resolve(true), 1000);
    });

    return {}
}


// TODO 获取信息公开
async function getMessage() {
    await new Promise(function (resolve, reject) {
        setTimeout(() => resolve(true), 1000);
    });

    return {};
}


// TODO 获取一河一策
async function getArticle() {
    await new Promise(function (resolve, reject) {
        setTimeout(() => resolve(true), 1000);
    });

    return {};
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
                        <Text style={styles.infoText}>各级河长负责牵头阻止展开包干河道水质和污染源现状调查，制定水环境治理实施方案，推动重点工程项目落实，协调解决重点难点问题，确保完成任务。</Text>
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
            data: [
                {
                    
                }
            ]
        };
    }

    render() {
        return (
            <FlatList>
                
            </FlatList>
        )
    }
}

// 巡河日志
class logList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View>

            </View>
        )
    }
}


// 信息公开
class Info extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tab: 'event'  // event  log
        };
    }

    switchTab (tab) {
        this.setState({tab});
    }

    render() {
        return (
            <View>
                <Text>
                    <TouchableWithoutFeedback onPress={() => this.switchTab('event')}>
                        <Text>事件列表</Text>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={() => this.switchTab('log')}>
                        <Text>巡河日志</Text>
                    </TouchableWithoutFeedback>
                </Text>

                {this.state.tab === 'event' && <EventList/>}
                {this.state.tab === 'log' && <logList/>}

            </View>
        )
    }
}

// 一河一策
class Article extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ScrollView style={styles.tabWrap}>
                <View>
                    <Text>一河一策</Text>
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
                {this.state.tab === 'info' && <Info/>}
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

});