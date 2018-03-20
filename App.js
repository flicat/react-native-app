/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import {StackNavigator} from 'react-navigation';
import CardStackStyleInterpolator from 'react-navigation/src/views/CardStack/CardStackStyleInterpolator';

import Start from './src/module/start';
import Login from './src/module/login';
import Index from './src/module/index';
import Message from './src/module/message';
import RiverList from './src/module/riverList';
import RiverInfo from './src/module/riverInfo';
import EventList from './src/module/eventList';
import NewsList from './src/module/newsList';
import EventInfo from './src/module/eventInfo';
import NewsInfo from './src/module/newsInfo';

export default StackNavigator({

    // 页面路由列表
    Start: { screen: Start },
    Login: { screen: Login },
    Index: { screen: Index },
    Message: { screen: Message },
    RiverList: { screen: RiverList },
    RiverInfo: { screen: RiverInfo },
    EventList: { screen: EventList },
    EventInfo: { screen: EventInfo },
    NewsList: { screen: NewsList },
    NewsInfo: { screen: NewsInfo }

}, {
    initialRouteName: 'Index',         // 默认路由
    headerMode: 'none',                // 隐藏头部
    mode: 'modal',                     // 动画效果
    navigationOptions: {
        gesturesEnabled: false,
    },
    transitionConfig: ()=>({
        // 从右向左：  forHorizontal；
        // 从下向上：  forVertical；
        // 安卓那种的从下向上： forFadeFromBottomAndroid；
        // 无动画：  forInitial。
        screenInterpolator: CardStackStyleInterpolator.forHorizontal,
    })
});


