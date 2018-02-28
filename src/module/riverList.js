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
    TextInput,
    Text,
    Image,
    Modal,
    SectionList,
    ImageBackground,
    TouchableHighlight,
    TouchableOpacity,
    TouchableWithoutFeedback
} from 'react-native';


// 网络错误提示信息
import NetworkErr from '../component/networkError';
// 头部导航
import TopNav from '../component/topNav';
// 列表为空
import Empty from '../component/empty';
// loading遮罩
import FullLoading from '../component/fullLoading';


// TODO 获取列表
async function getList(param) {
    await new Promise(function (resolve, reject) {
        setTimeout(() => resolve(true), 1000);
    });

    return [
        {
            name: '柳城村段21',
            riverer: {name: '李德全', title: ['总河长', '区委副书记']},
            id: 21,
            sub: [{id: 1, riverer: {name: '李德全', title: ['总河长', '区委副书记']}, name: '柳城村段1'}, {
                id: 2,
                riverer: {name: '李德全', title: ['总河长', '区委副书记']},
                name: '柳城村段2'
            }]
        },
        {
            name: '柳城村段23',
            riverer: {name: '李德全', title: ['总河长', '区委副书记']},
            id: 23,
            sub: [{id: 3, riverer: {name: '李德全', title: ['总河长', '区委副书记']}, name: '柳城村段3'}, {
                id: 4,
                riverer: {name: '李德全', title: ['总河长', '区委副书记']},
                name: '柳城村段4'
            }]
        },
        {
            name: '柳城村段25',
            riverer: {name: '李德全', title: ['总河长', '区委副书记']},
            id: 25,
            sub: [{id: 5, riverer: {name: '李德全', title: ['总河长', '区委副书记']}, name: '柳城村段5'}, {
                id: 6,
                riverer: {name: '李德全', title: ['总河长', '区委副书记']},
                name: '柳城村段6'
            }]
        },
        {
            name: '柳城村段27',
            riverer: {name: '李德全', title: ['总河长', '区委副书记']},
            id: 27,
            sub: [{id: 7, riverer: {name: '李德全', title: ['总河长', '区委副书记']}, name: '柳城村段7'}, {
                id: 8,
                riverer: {name: '李德全', title: ['总河长', '区委副书记']},
                name: '柳城村段8'
            }]
        },
        {
            name: '柳城村段29',
            riverer: {name: '李德全', title: ['总河长', '区委副书记']},
            id: 29,
            sub: [{id: 9, riverer: {name: '李德全', title: ['总河长', '区委副书记']}, name: '柳城村段9'}, {
                id: 10,
                riverer: {name: '李德全', title: ['总河长', '区委副书记']},
                name: '柳城村段10'
            }]
        },
        {
            name: '柳城村段31',
            riverer: {name: '李德全', title: ['总河长', '区委副书记']},
            id: 31,
            sub: [{id: 11, riverer: {name: '李德全', title: ['总河长', '区委副书记']}, name: '柳城村段11'}, {
                id: 12,
                riverer: {name: '李德全', title: ['总河长', '区委副书记']},
                name: '柳城村段12'
            }]
        },
        {
            name: '柳城村段33',
            riverer: {name: '李德全', title: ['总河长', '区委副书记']},
            id: 33,
            sub: [{id: 13, riverer: {name: '李德全', title: ['总河长', '区委副书记']}, name: '柳城村段13'}, {
                id: 14,
                riverer: {name: '李德全', title: ['总河长', '区委副书记']},
                name: '柳城村段14'
            }]
        },
        {
            name: '柳城村段35',
            riverer: {name: '李德全', title: ['总河长', '区委副书记']},
            id: 35,
            sub: [{id: 15, riverer: {name: '李德全', title: ['总河长', '区委副书记']}, name: '柳城村段15'}, {
                id: 16,
                riverer: {name: '李德全', title: ['总河长', '区委副书记']},
                name: '柳城村段16'
            }]
        },
        {
            name: '柳城村段37',
            riverer: {name: '李德全', title: ['总河长', '区委副书记']},
            id: 37,
            sub: [{id: 17, riverer: {name: '李德全', title: ['总河长', '区委副书记']}, name: '柳城村段17'}, {
                id: 18,
                riverer: {name: '李德全', title: ['总河长', '区委副书记']},
                name: '柳城村段18'
            }]
        },
        {
            name: '柳城村段39',
            riverer: {name: '李德全', title: ['总河长', '区委副书记']},
            id: 39,
            sub: [{id: 19, riverer: {name: '李德全', title: ['总河长', '区委副书记']}, name: '柳城村段19'}, {
                id: 20,
                riverer: {name: '李德全', title: ['总河长', '区委副书记']},
                name: '柳城村段20'
            }]
        },
        {name: '柳城村段22', riverer: {name: '李德全', title: ['总河长', '区委副书记']}, id: 22},
        {name: '柳城村段24', riverer: {name: '李德全', title: ['总河长', '区委副书记']}, id: 24},
        {name: '柳城村段26', riverer: {name: '李德全', title: ['总河长', '区委副书记']}, id: 26},
        {name: '柳城村段28', riverer: {name: '李德全', title: ['总河长', '区委副书记']}, id: 28},
        {name: '柳城村段30', riverer: {name: '李德全', title: ['总河长', '区委副书记']}, id: 30},
        {name: '柳城村段32', riverer: {name: '李德全', title: ['总河长', '区委副书记']}, id: 32},
        {name: '柳城村段34', riverer: {name: '李德全', title: ['总河长', '区委副书记']}, id: 34},
        {name: '柳城村段36', riverer: {name: '李德全', title: ['总河长', '区委副书记']}, id: 36},
        {name: '柳城村段38', riverer: {name: '李德全', title: ['总河长', '区委副书记']}, id: 38},
        {name: '柳城村段40', riverer: {name: '李德全', title: ['总河长', '区委副书记']}, id: 40}
    ]
}


// TODO 获取区域列表
async function getAreaList() {
    await new Promise(function (resolve, reject) {
        setTimeout(() => resolve(true), 1000);
    });

    return [
        {id: 1, name: '半江镇'},
        {id: 2, name: '东圃镇'},
        {id: 3, name: '乌镇'},
        {id: 4, name: '龙门镇'},
        {id: 5, name: '沙屋下镇'},
        {id: 6, name: '名字很长的镇'},
        {id: 7, name: '名字很长的二号镇'},
        {id: 8, name: '半江镇'},
        {id: 9, name: '半江镇'}
    ];
}


// TODO 获取所有河道列表
async function getAllRiver() {
    await new Promise(function (resolve, reject) {
        setTimeout(() => resolve(true), 1000);
    });

    return [
        {id: 0, name: '区级所有河段'},
        {id: 1, name: '穿堂镇1级河段'},
        {id: 2, name: '穿堂镇2级河段'},
        {id: 3, name: '穿堂镇3级河段'},
        {id: 4, name: '穿堂镇4级河段'},
        {id: 5, name: '穿堂镇5级河段'},
        {id: 6, name: '穿堂镇6级河段'},
        {id: 7, name: '穿堂镇7级河段'},
        {id: 8, name: '穿堂镇8级河段'},
        {id: 9, name: '穿堂镇9级河段'},
        {id: 10, name: '穿堂镇10级河段'},
        {id: 11, name: '穿堂镇11级河段'},
        {id: 12, name: '穿堂镇12级河段'},
        {id: 13, name: '穿堂镇13级河段'},
        {id: 14, name: '穿堂镇14级河段'},
        {id: 15, name: '穿堂镇15级河段'},
        {id: 16, name: '穿堂镇16级河段'},
        {id: 17, name: '穿堂镇17级河段'},
        {id: 18, name: '穿堂镇18级河段'},
        {id: 19, name: '穿堂镇19级河段'},
        {id: 20, name: '穿堂镇20级河段'}
    ];
}


// 顶部搜索表单
class TopSearch extends Component {
    constructor(props) {
        super(props);

        this.state = {
            keyword: ''
        };
    }

    search() {
        // TODO 搜索
    }

    render() {
        return (
            <View style={styles.topSearch}>
                <View style={styles.searchInput}>
                    <Image style={styles.searchIcon} resizeMode="contain"
                           source={require('../assets/images/icon-search.png')}/>
                    <TextInput
                        placeholder="请输入河流或姓名"
                        maxLength={20}
                        returnKeyType="search"
                        placeholderTextColor="#b5b5b5"
                        underlineColorAndroid="transparent"
                        selectTextOnFocus={true}
                        clearButtonMode="always"
                        onChange={(value) => this.setState({keyword: value})}
                        onSubmitEditing={() => this.search()}
                        style={styles.textInput}/>
                </View>
                <TouchableOpacity activeOpacity={1} onPress={() => this.search()}>
                    <Text style={styles.searchBtn}>搜索</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

// 区域下拉菜单
class AreaMenu extends Component {
    constructor(props) {
        super(props);

        this.state = {
            areaId: 0,
            areas: []
        }
    }

    componentDidMount() {
        getAreaList().then(areas => {
            this.setState({
                areas
            });
        })
    }

    setArea(areaId) {
        this.setState({
            areaId
        });
    }

    render() {
        return (
            <View style={styles.areaMenu}>
                <View style={styles.areaItem}>
                    <TouchableHighlight activeOpacity={1} underlayColor="#f8f8f8" onPress={() => this.setArea(0)}>
                        <Text style={this.state.areaId === 0 ? styles.areaTextActive : styles.areaText}>区级</Text>
                    </TouchableHighlight>
                </View>
                {
                    this.state.areas.map(item =>
                        (<View style={styles.areaItem} key={item.id}>
                            <TouchableHighlight activeOpacity={1} underlayColor="#f8f8f8"
                                                onPress={() => this.setArea(item.id)}>
                                <Text
                                    style={this.state.areaId === item.id ? styles.areaTextActive : styles.areaText}>{item.name}</Text>
                            </TouchableHighlight>
                        </View>)
                    )
                }
            </View>
        )
    }
}

// 河道下拉菜单
class RiverMenu extends Component {
    constructor(props) {
        super(props);

        this.state = {
            riverId: 0,
            rivers: []
        }
    }

    componentDidMount() {
        getAllRiver().then(rivers => {
            this.setState({
                rivers
            });
        })
    }

    setRiver(riverId) {
        this.setState({
            riverId
        });
    }

    render() {
        return (
            <View style={styles.riverMenu}>
                <SectionList
                    initialNumToRender={15}
                    sections={[{data: this.state.rivers}]}
                    keyExtractor={item => item.id}
                    renderItem={({item}) => (
                        <TouchableHighlight activeOpacity={1} underlayColor="#f8f8f8"
                                            onPress={() => this.setRiver(item.id)}>
                            <Text
                                style={this.state.riverId === item.id ? styles.riverTextActive : styles.riverText}>{item.name}</Text>
                        </TouchableHighlight>
                    )}/>
            </View>
        )
    }
}

// 下拉菜单
class Menu extends Component {
    constructor(props) {
        super(props);

        this.state = {
            type: this.props.type,       // area 区域 river 河道
            isShow: false       // 显示下拉菜单
        };

        this.openPopup = this.openPopup.bind(this);
        this.closePopup = this.closePopup.bind(this);
    }

    // 打开下拉菜单
    openPopup(type) {
        this.setState({
            type,
            isShow: true
        });

        this.props.setType(type);
    }

    // 关闭下拉菜单
    closePopup() {
        this.setState({
            isShow: false
        });
    }

    render() {
        return (
            <View style={styles.menu}>
                <View style={styles.navWrap}>
                    <TouchableWithoutFeedback onPress={() => this.openPopup('area')}>
                        <View style={this.state.type === 'area' ? styles.navItemActive : styles.navItem}>
                            <Text style={this.state.type === 'area' ? styles.navTextActive : styles.navText}>按区域</Text>
                            {
                                this.state.type === 'area' &&
                                <Image style={styles.navIcon} resizeMode="contain"
                                       source={require('../assets/images/icon-triangle-down.png')}/>
                            }
                        </View>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={() => this.openPopup('river')}>
                        <View style={this.state.type === 'river' ? styles.navItemActive : styles.navItem}>
                            <Text style={this.state.type === 'river' ? styles.navTextActive : styles.navText}>按河道</Text>
                            {
                                this.state.type === 'river' &&
                                <Image style={styles.navIcon} resizeMode="contain"
                                       source={require('../assets/images/icon-triangle-down.png')}/>
                            }
                        </View>
                    </TouchableWithoutFeedback>
                </View>
                {
                    this.state.isShow &&
                    <View style={styles.popupMenu}>
                        {this.state.type === 'area' && <AreaMenu submit={this.closePopup}/>}
                        {this.state.type === 'river' && <RiverMenu submit={this.closePopup}/>}
                        <TouchableWithoutFeedback onPress={() => this.closePopup()}>
                            <View style={styles.layout}/>
                        </TouchableWithoutFeedback>
                    </View>
                }
            </View>
        )
    }
}

// 公共河道列表组件
class List extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isReady: false,
            openTag: {},        // 当前打开的标签id
            list: []
        }
    }

    componentDidMount() {
        getList().then(list => {
            this.setState({
                list: list,
                isReady: true
            });
        })
    }

    toggleItem(id) {
        this.setState((state) => {
            let openTag = state.openTag;
            openTag[id] = !openTag[id];

            return {openTag}
        });
    }

    goInfo(id) {
        this.props.goInfo(id);
    }

    render() {
        return (
            !this.state.isReady ?
                <FullLoading/> :
                this.state.list && this.state.list.length ?
                    <SectionList
                        initialNumToRender={10}
                        sections={[{data: this.state.list}]}
                        keyExtractor={item => item.id}
                        renderItem={({item}) => (

                            item.sub && item.sub.length ?
                                <View>
                                    <ImageBackground
                                        style={styles.riverIconWrap}
                                        source={this.state.openTag[item.id] ? require('../assets/images/icon-reduce.png') : require('../assets/images/icon-plus.png')}>
                                        <View style={styles.riverIcon}/>
                                    </ImageBackground>
                                    <TouchableOpacity activeOpacity={1} onPress={() => this.toggleItem(item.id)}>
                                        <View style={styles.riverItem}>
                                            <View style={{flex: 1}}>
                                                <Text style={styles.riverName}>{item.name}</Text>
                                                {
                                                    item.riverer &&
                                                    <Text style={styles.riverer}>
                                                        <Text>{item.riverer.name}</Text>
                                                        {item.riverer.title.map(title => <Text ket={title}>
                                                            | {title}</Text>)}
                                                    </Text>
                                                }
                                            </View>
                                            <TouchableOpacity activeOpacity={1} onPress={() => this.goInfo(item.id)}>
                                                <Text style={styles.listItemBtn}>详情</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </TouchableOpacity>
                                    <View>
                                        {
                                            this.state.openTag[item.id] &&
                                            item.sub.map(item => (
                                                <TouchableOpacity key={item.id} activeOpacity={1}
                                                                  onPress={() => this.goInfo(item.id)}>
                                                    <View style={styles.riverItem}>
                                                        <View>
                                                            <Text style={styles.riverName}>{item.name}</Text>
                                                            {
                                                                item.riverer &&
                                                                <Text style={styles.riverer}>
                                                                    <Text>{item.riverer.name}</Text>
                                                                    {item.riverer.title.map(title => <Text key={title}>
                                                                        | {title}</Text>)}
                                                                </Text>
                                                            }
                                                        </View>
                                                        <Text style={styles.listItemBtn}>详情</Text>
                                                    </View>
                                                </TouchableOpacity>))
                                        }
                                    </View>
                                </View> :
                                <TouchableOpacity activeOpacity={1}>
                                    <View style={styles.riverItem}>
                                        <View>
                                            <Text style={styles.riverName}>{item.name}</Text>
                                            {
                                                item.riverer &&
                                                <Text style={styles.riverer}>
                                                    <Text>{item.riverer.name}</Text>
                                                    {item.riverer.title.map(title => <Text key={title}>
                                                        | {title}</Text>)}
                                                </Text>
                                            }
                                        </View>

                                        <Text style={styles.listItemBtn}>详情</Text>
                                    </View>
                                </TouchableOpacity>

                        )}/> :
                    <Empty/>
        )
    }
}

// 区域列表
class AreaList extends Component {
    constructor(props) {
        super(props);

        this.goInfo = this.goInfo.bind(this);
        this.state = {
            showSituation: false
        };
    }

    goInfo(id) {
        this.props.goInfo(id);
    }

    toggleSituation() {
        this.setState({
            showSituation: !this.state.showSituation
        });
    }

    render() {
        return (
            <View style={styles.list}>
                <View style={styles.listTitle}>
                    <View style={styles.listTitleRow}>
                        <Image source={require('../assets/images/icon-river.png')} style={styles.listTitleIcon}
                               resizeMode="contain"/>
                        <Text style={styles.listTitleText}>柳城镇</Text>
                        <TouchableOpacity activeOpacity={1} onPress={() => this.toggleSituation()}>
                            <Text style={styles.situationBtn}>概况</Text>
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.listTitleInfo}>
                        <Text>张仁建</Text>
                        <Text> | </Text>
                        <Text>总河长</Text>
                    </Text>
                    <Text style={styles.listTitleInfo}>
                        <Text>戴少梅</Text>
                        <Text> | </Text>
                        <Text>副总河长</Text>
                    </Text>
                </View>

                {this.state.showSituation && <AreaInfo toggle={() => this.toggleSituation()}/>}

                <List goInfo={this.goInfo}/>
            </View>
        )
    }
}

// 区域概况
class AreaInfo extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Modal animationType="fade" transparent={true} visible={true}>
                <TouchableWithoutFeedback onPress={this.props.toggle}>
                    <View style={styles.modalWrap}>
                        <View style={styles.modalContent}>
                            <Text style={styles.modalTitle}>太和镇河流概况</Text>
                            <View style={styles.modalItem}>
                                <Image style={styles.modalIcon} source={require('../assets/images/icon-m-river.png')}
                                       resizeMode="contain"/>
                                <View style={styles.modalLabel}>
                                    <Text style={styles.modalText}>
                                        共<Text style={styles.modalEmTxt}>10</Text>条河
                                    </Text>
                                    <Text style={styles.modalText}>河流总长度 <Text
                                        style={styles.modalEmTxt}>20km</Text></Text>
                                    <Text style={styles.modalText}>总积雨面积 <Text
                                        style={styles.modalEmTxt}>500km²</Text></Text>
                                </View>
                            </View>
                            <View style={styles.modalItem}>
                                <Image style={styles.modalIcon} source={require('../assets/images/icon-m-area.png')}
                                       resizeMode="contain"/>
                                <View style={styles.modalLabel}>
                                    <Text style={styles.modalStrongTxt}>积雨面积：</Text>
                                    <Text style={styles.modalSpanTxt}>
                                        <Text style={styles.modalText}>50km²</Text> 以下的有 <Text style={styles.modalEmTxt}>3条</Text>
                                    </Text>
                                    <Text style={styles.modalSpanTxt}>
                                        <Text style={styles.modalText}>50km²</Text> 至 <Text style={styles.modalText}>100km²</Text> 的有 <Text style={styles.modalEmTxt}>6条</Text>
                                    </Text>
                                    <Text style={styles.modalSpanTxt}>
                                        <Text style={styles.modalText}>100km²</Text> 以上的有 <Text style={styles.modalEmTxt}>1条</Text>
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </Modal>
        )
    }
}

// 河道列表
class RiverList extends Component {
    constructor(props) {
        super(props);

        this.goInfo = this.goInfo.bind(this);
    }

    goInfo(id) {
        this.props.goInfo(id);
    }

    render() {
        return (
            <View style={styles.list}>
                <View style={styles.listTitle}>
                    <View style={styles.listTitleRow}>
                        <Image source={require('../assets/images/icon-river.png')} style={styles.listTitleIcon}
                               resizeMode="contain"/>
                        <Text style={styles.listTitleText}>柳城镇</Text>
                    </View>
                    <TouchableHighlight>
                        <Text style={styles.listItemBtn}>详情</Text>
                    </TouchableHighlight>
                </View>
                <List goInfo={this.goInfo}/>
            </View>
        )
    }
}

export default class RiversInfo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            type: 'area'
        };

        this.setType = this.setType.bind(this);
        this.goInfo = this.goInfo.bind(this);
    }

    setType(type) {
        this.setState({
            type
        });
    }

    goInfo(id) {
        this.props.navigation.navigate('RiverInfo', {id});
    }

    render() {
        return (
            <View style={styles.wrap}>
                <TopNav title={'河道信息'} navigation={this.props.navigation}/>
                <TopSearch/>
                <Menu setType={this.setType} type={this.state.type}/>
                {this.state.type === 'area' && <AreaList goInfo={this.goInfo}/>}
                {this.state.type === 'river' && <RiverList goInfo={this.goInfo}/>}
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

    topSearch: {
        alignItems: 'stretch',
        justifyContent: 'space-between',
        flexDirection: 'row',
        width: getWidth(1080),
        height: getWidth(96),
        paddingHorizontal: getWidth(48),
        paddingVertical: 0,
        margin: 0,
        marginBottom: getWidth(19)
    },
    searchInput: {
        width: getWidth(780),
        height: getWidth(96),
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderRadius: 5,
    },
    searchIcon: {
        width: getWidth(31),
        height: getWidth(31)
    },
    searchBtn: {
        width: getWidth(180),
        height: getWidth(96),
        lineHeight: getWidth(96),
        fontSize: getWidth(32),
        textAlign: 'center',
        color: '#fff',
        backgroundColor: '#219ef7',
        overflow: 'hidden',
        borderRadius: 5,
    },
    textInput: {
        fontSize: getWidth(32),
        width: getWidth(700),
        height: getWidth(96),
        lineHeight: getWidth(96),
        textAlign: 'left',
        borderWidth: 0,
        padding: 0,
        margin: 0
    },

    menu: {
        width: getWidth(1080),
        height: getWidth(102),
        paddingHorizontal: getWidth(48),
        marginBottom: getWidth(24),
        overflow: 'visible',
    },
    navWrap: {
        width: getWidth(984),
        height: getWidth(102),
        padding: 0,
        margin: 0,
        borderColor: '#219ef7',
        backgroundColor: '#fff',
        borderWidth: 1,
        borderRadius: 5,
        overflow: 'hidden',
        flexDirection: 'row'
    },
    navItem: {
        flex: 1,
        justifyContent: 'center',
    },
    navText: {
        fontSize: getWidth(36),
        textAlign: 'center',
        color: '#a6a6a6'
    },
    navItemActive: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#219ef7',
    },
    navTextActive: {
        fontSize: getWidth(36),
        textAlign: 'center',
        color: '#fff'
    },
    navIcon: {
        width: getWidth(23),
        height: getWidth(14),
        position: 'absolute',
        right: getWidth(24),
        top: getWidth(44),
    },

    popupMenu: {
        position: 'absolute',
        left: 0,
        top: getWidth(102),
        zIndex: 10,
        width: getWidth(1080),
        height: getWidth(1920),
    },
    layout: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.2)'
    },

    areaMenu: {
        position: 'absolute',
        left: 0,
        top: 0,
        zIndex: 10,
        backgroundColor: '#fff',
        width: getWidth(1080),
        paddingVertical: getHeight(36),
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    areaItem: {
        width: getWidth(270),
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 10,
        overflow: 'hidden',
        margin: 0,
        paddingLeft: 0,
        paddingRight: 0,
    },
    areaTextActive: {
        fontSize: getWidth(36),
        backgroundColor: '#219ef7',
        color: '#fff',
        padding: getWidth(20),
        minWidth: getWidth(147),
        textAlign: 'center',
        borderRadius: 5
    },
    areaText: {
        fontSize: getWidth(36),
        color: '#333',
        padding: getWidth(20),
        textAlign: 'center',
        borderRadius: 5
    },

    riverMenu: {
        position: 'absolute',
        left: 0,
        top: 0,
        zIndex: 10,
        backgroundColor: '#fff',
        width: getWidth(1080),
        maxHeight: getHeight(1190),
        paddingVertical: getHeight(36)
    },
    riverTextActive: {
        paddingHorizontal: getHeight(80),
        paddingVertical: getWidth(20),
        fontSize: getWidth(36),
        color: '#219ef7'
    },
    riverText: {
        paddingHorizontal: getHeight(80),
        paddingVertical: getWidth(20),
        fontSize: getWidth(36),
        color: '#333'
    },

    list: {
        flex: 1,
        zIndex: -1,
        backgroundColor: '#fff',
        paddingHorizontal: getWidth(30)
    },
    listTitle: {
        height: getWidth(115),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomColor: '#e5e5e7',
        borderBottomWidth: 1
    },
    listTitleRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    listTitleIcon: {
        width: getWidth(47),
        height: getWidth(34),
    },
    listTitleText: {
        fontSize: getWidth(38),
        color: '#000',
        marginHorizontal: 5
    },
    listTitleInfo: {
        fontSize: getWidth(36),
        color: '#acacac'
    },
    listItemBtn: {
        fontSize: getWidth(32),
        color: '#929292',
        paddingHorizontal: getWidth(33),
        paddingVertical: getWidth(16),
        borderWidth: 1,
        borderColor: '#e4e4e4',
        borderRadius: 3
    },
    situationBtn: {
        width: getWidth(94),
        height: getWidth(52),
        lineHeight: getWidth(52),
        fontSize: getWidth(28),
        textAlign: 'center',
        color: '#fff',
        backgroundColor: '#219ef7',
        overflow: 'hidden',
        borderRadius: getWidth(10)
    },
    riverItem: {
        height: getWidth(183),
        paddingLeft: getWidth(94),
        borderBottomWidth: 1,
        borderBottomColor: '#e5e5e7',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    riverName: {
        fontSize: getWidth(36),
        color: '#333',
        marginBottom: 5
    },
    riverer: {
        fontSize: getWidth(34),
        color: '#acacac',
    },
    riverIconWrap: {
        position: 'absolute',
        left: 0,
        top: getWidth(58),
        width: getWidth(67),
        height: getWidth(67),
        borderRadius: 1
    },
    riverIcon: {
        width: getWidth(67),
        height: getWidth(67),
    },

    modalWrap: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)'
    },
    modalContent: {
        width: getWidth(677),
        height: getWidth(745),
        paddingVertical: getWidth(50),
        overflow: 'hidden',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-around',
        borderRadius: 5
    },
    modalTitle: {
        fontSize: getWidth(42),
        textAlign: 'center',
        color: '#000',
    },
    modalItem: {
        width: getWidth(677),
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    modalIcon: {
        width: getWidth(108),
        height: getWidth(108),
        marginRight: getWidth(40),
    },
    modalLabel: {
        width: getWidth(460),
    },
    modalText: {
        fontSize: getWidth(34),
        lineHeight: getWidth(34 * 2),
        color: '#666',
    },
    modalEmTxt: {
        fontSize: getWidth(34),
        color: '#219ef7',
    },
    modalStrongTxt: {
        fontSize: getWidth(34),
        color: '#000',
    },
    modalSpanTxt: {
        fontSize: getWidth(34),
        color: '#acacac',
    },
});