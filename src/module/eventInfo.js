/*!
 * @author liyuelong1020@gmail.com
 * @date 2018/1/29 029
 * @description 首屏
 */

import React, {Component} from 'react';
import {getWidth, getHeight} from '../plugin/getSize';
import {
    StyleSheet,
    View,
    Text,
    Image,
    ScrollView,
    FlatList,
    TouchableWithoutFeedback, AlertIOS
} from 'react-native';

// 滚动banner组件
import Swiper from 'react-native-swiper';

// 网络错误提示信息
import NetworkErr from '../component/networkError';
// 头部导航
import TopNav from '../component/topNav';
// loading遮罩
import FullLoading from '../component/fullLoading';
// 列表为空
import Empty from '../component/empty';

// 获取事件信息
async function getEventInfo(event_code) {
    let res;
    let url = 'http://120.79.90.233:8080/qxhzz/app/getRvEventDetail.action';

    let params = {
        uid: 407,            // uid
        event_code,       // 事件编码
    };

    url = [url, Object.keys(params).map(key => [key, params[key]].join('=')).join('&')].join('?');

    try {

        res = await fetch(url);

    } catch (e) {
        AlertIOS.alert('', '接口错误！\ngetRvEventDetail.action', [{text: 'OK', onPress: () => null}])
    }

    let data = await res.json();

    if (data && data.detail && data.detail.status === 1) {
        return data.detail.eventDetail;
    } else {
        AlertIOS.alert('', data.content, [{text: 'OK', onPress: () => null}]);
        return {};
    }

}

// 头部轮播图
class Album extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <View style={styles.album}>
                {
                    Array.isArray(this.props.data) &&
                    <Swiper style={styles.albumWrap}
                            paginationStyle={{bottom: getWidth(18)}}
                            autoplay={true}
                            index={0}
                            loop={true}
                            width={getWidth(1080)}
                            height={getWidth(492)}
                            dot={<View style={styles.albumDot}/>}
                            activeDot={<View style={[styles.albumDot, styles.albumActiveDot]}/>}>
                        {this.props.data.map(src => (
                            <Image
                                key={src}
                                source={{uri: 'http://120.79.90.233:8080/imageserver/qxhzz/uploadfile/' + src}}
                                style={styles.albumItem}
                                resizeMode="cover"/>
                        ))}
                    </Swiper>
                }
            </View>
        )
    }
}

// 事件信息
class Info extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.info}>
                <View style={styles.infoRow}>
                    <Text style={styles.infoLabel}>事件上报：</Text>
                    <View style={styles.infoControl}>
                        <Text style={styles.infoStrong}>{this.props.data.event_describe}</Text>
                        <Text style={styles.infoSpan}>{this.props.data.report_time}</Text>
                    </View>
                </View>
                <View style={styles.infoRow}>
                    <Text style={styles.infoLabel}>地点：</Text>
                    <View style={styles.infoControl}>
                        <Text style={styles.infoStrong}>{this.props.data.address}</Text>
                        <View style={styles.infoRow}>
                            <Image source={require('../assets/images/icon-location.png')} style={styles.iconLocation}
                                   resizeMode="cover"/>
                            <Text style={styles.infoEm}>距离我350m</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.infoRow}>
                    <Text style={styles.infoLabel}>事件状态：</Text>
                    <View style={styles.infoControl}>
                        {
                            this.props.data.event_status !== '5' &&
                            <Image style={styles.iconState}
                                   source={require('../assets/images/icon-state-active.png')}
                                   resizeMode="contain"/>
                        }
                        {
                            this.props.data.event_status === '5' &&
                            <Image style={styles.iconState}
                                   source={require('../assets/images/icon-state-done.png')}
                                   resizeMode="contain"/>
                        }
                    </View>
                </View>
            </View>
        )
    }
}

// 事件流程
class Process extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.process}>
                <Text style={styles.processTitle}>具体环节：</Text>
                {
                    Array.isArray(this.props.data) &&
                    <View style={styles.processContent}>
                        <FlatList
                            style={{overflow: 'visible'}}
                            data={this.props.data}
                            ListEmptyComponent={Empty}
                            keyExtractor={item => item.uuid}
                            ItemSeparatorComponent={({highlighted}) => (
                                <View style={{
                                    borderBottomWidth: StyleSheet.hairlineWidth,
                                    borderBottomColor: '#d9d9d9'
                                }}/>
                            )}
                            renderItem={({item, index}) => {
                                return (
                                    <View key={item.uuid}
                                          style={[styles.processItem, index === 0 ? styles.processActiveItem : {}]}>
                                        <View
                                            style={[styles.processIcon, index === 0 ? styles.processActiveIcon : {}]}/>
                                        <Text
                                            style={[styles.processMsg, index === 0 ? styles.processActiveMsg : {}]}>{item.opinion}</Text>
                                        <Text style={[styles.processDecs, index === 0 ? styles.processActiveDecs : {}]}>
                                            <Text
                                                style={styles.processDate}>{item.deal_time}         </Text>
                                            <Text>处理人：{item.operator_name}</Text>
                                        </Text>
                                        <Photo data={item.images.concat(item.images)}/>
                                    </View>
                                )
                            }}
                        />
                    </View>
                }
            </View>
        )
    }
}

// 图册
class Photo extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.photo}>

                {
                    Array.isArray(this.props.data) &&
                    this.props.data.map(src => (
                        <Image key={src}
                               source={{uri: 'http://120.79.90.233:8080/imageserver/qxhzz/uploadfile/' + src}}
                               style={styles.photoItem}
                               resizeMode="cover"/>
                    ))
                }
            </View>
        )
    }
}

export default class EventInfo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: {},
            isReady: false
        };
    }

    componentDidMount() {
        getEventInfo(this.props.navigation.state.params.id).then(data => {
            this.setState({
                data,
                isReady: true
            });
        })
    }

    render() {
        return (
            <View style={styles.wrap}>
                <TopNav title={'事件详情'} navigation={this.props.navigation}/>
                <ScrollView style={{backgroundColor: '#fff'}}>
                    <Album data={this.state.data.event_images}/>
                    <Info data={this.state.data}/>
                    <Process data={this.state.data.eventFlow}/>
                    <TouchableWithoutFeedback>
                        <View style={styles.btnWrap}>
                            <Text style={styles.btnHandler}>处理</Text>
                        </View>
                    </TouchableWithoutFeedback>
                </ScrollView>
                <FullLoading visible={!this.state.isReady}/>
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

    album: {
        width: getWidth(1080),
        height: getWidth(492),
    },
    albumWrap: {
        height: getWidth(492),
    },
    albumItem: {
        width: getWidth(1080),
        height: getWidth(492),
    },
    albumDot: {
        width: getWidth(38),
        height: getWidth(12),
        marginHorizontal: getWidth(10),
        backgroundColor: '#fff'
    },
    albumActiveDot: {
        backgroundColor: '#0988e2'
    },

    info: {
        padding: getWidth(30),
        borderBottomWidth: getWidth(30),
        borderBottomColor: '#efeff4',
        backgroundColor: '#fff',
    },
    infoRow: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        marginBottom: getWidth(30),
    },

    infoLabel: {
        fontSize: getWidth(36),
        width: getWidth(190),
        textAlign: 'right',
        color: '#a6a6a6',
    },
    infoControl: {
        flex: 1
    },
    infoStrong: {
        fontSize: getWidth(36),
        color: '#333',
        marginBottom: getWidth(18),
    },
    infoSpan: {
        fontSize: getWidth(32),
        color: '#a6a6a6',
    },
    iconLocation: {
        width: getWidth(38),
        height: getWidth(50),
        marginRight: getWidth(38 / 2)
    },
    infoEm: {
        fontSize: getWidth(32),
        color: '#219ef7',
        lineHeight: getWidth(32 * 2)
    },
    iconState: {
        width: getWidth(122),
        height: getWidth(71),
        marginTop: getWidth(-20)
    },

    process: {
        backgroundColor: '#fff',
        padding: getWidth(30),
    },
    processTitle: {
        fontSize: getWidth(36),
        color: '#a6a6a6',
    },
    processContent: {
        flex: 1,
        marginLeft: getWidth(25),
        paddingLeft: getWidth(48),
        marginTop: getWidth(54),
        borderLeftWidth: 1,
        borderLeftColor: '#d9d9d9'
    },
    processItem: {
        marginTop: getWidth(38),
        marginBottom: getWidth(24),
    },
    processActiveItem: {
        marginTop: 0,
    },
    processIcon: {
        width: getWidth(30),
        height: getWidth(30),
        borderRadius: getWidth(30 / 2),
        backgroundColor: '#d9d9d9',
        position: 'absolute',
        left: getWidth(-60),
        top: 0,
    },
    processMsg: {
        fontSize: getWidth(34),
        marginTop: getWidth(-14),
        color: '#a6a6a6',
        lineHeight: getWidth(34 * 1.5),
    },
    processDecs: {
        fontSize: getWidth(30),
        color: '#a6a6a6',
        marginTop: getWidth(30),
    },
    processActiveIcon: {
        width: getWidth(37),
        height: getWidth(37),
        borderRadius: getWidth(37 / 2),
        backgroundColor: '#219ef7',
        borderWidth: getWidth(7),
        borderColor: '#bce2fd',
        left: getWidth(-62),
    },
    processActiveMsg: {
        marginTop: getWidth(-10),
        color: '#219ef7',
    },
    processActiveDecs: {
        color: '#219ef7',
    },

    photo: {
        width: getWidth(1050),
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        flexWrap: 'wrap',
        marginLeft: getWidth(-73),
    },
    photoItem: {
        width: getWidth(234),
        height: getWidth(233),
        marginTop: getWidth(30),
        marginRight: getWidth(29),
    },

    btnWrap: {
        paddingHorizontal: getWidth(30),
        marginBottom: getWidth(90)
    },
    btnHandler: {
        flex: 1,
        height: getWidth(102),
        lineHeight: getWidth(102),
        textAlign: 'center',
        fontSize: getWidth(40),
        color: '#fff',
        backgroundColor: '#219ef7',
        borderRadius: getWidth(9),
        overflow: 'hidden',
    },
});