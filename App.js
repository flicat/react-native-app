/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import {StackNavigator} from 'react-navigation';
import CardStackStyleInterpolator from 'react-navigation/src/views/CardStack/CardStackStyleInterpolator';

import Start from './src/component/start';
import Login from './src/component/login';
import Index from './src/component/index';
import Message from './src/component/message';

export default StackNavigator({

    // 页面路由列表
    Start: { screen: Start },
    Login: { screen: Login },
    Index: { screen: Index },
    Message: { screen: Message }

}, {
    initialRouteName: 'Start',         // 默认路由
    headerMode: 'none',                // 隐藏头部
    mode: 'modal',                     // 动画效果
    navigationOptions: {
        gesturesEnabled: false,
    },
    transitionConfig: ()=>({
        // 1、从右向左：  forHorizontal；
        // 2、从下向上：  forVertical；
        // 3、安卓那种的从下向上： forFadeFromBottomAndroid；
        // 4、无动画：  forInitial。
        // 只要修改最后的forVertical就可以实现不同的动画了。
        screenInterpolator: CardStackStyleInterpolator.forHorizontal,
    })
});


