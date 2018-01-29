/*!
 * @author liyuelong1020@gmail.com
 * @date 2018/1/29 029
 * @description 页面路由
 */

import {StackNavigator} from 'react-navigation';
import {Animated, Easing} from 'react-native';
import CardStackStyleInterpolator from 'react-navigation/src/views/CardStack/CardStackStyleInterpolator';

import Index from '../component/index';
import Message from '../component/message';

export default StackNavigator({

    // 页面路由列表
    Index: { screen: Index },
    Message: { screen: Message }

}, {
    initialRouteName: 'Index',         // 默认路由
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

