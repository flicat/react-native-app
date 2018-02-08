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
    SectionList,
    ImageBackground,
    TouchableHighlight,
    TouchableOpacity,
    TouchableWithoutFeedback,
    SegmentedControlIOS
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


// 基础信息
class Base extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View>
                <Text>基础信息</Text>
            </View>
        )
    }
}

// 信息公开
class Info extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View>
                <Text>信息公开</Text>
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
            <View>
                <Text>一河一策</Text>
            </View>
        )
    }
}

export default class RiverInfo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: this.props.navigation.state.params.id,
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
                <View>
                    {this.state.tab === 'base' && <Base/>}
                    {this.state.tab === 'info' && <Info/>}
                    {this.state.tab === 'article' && <Article/>}
                </View>
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
    }
});