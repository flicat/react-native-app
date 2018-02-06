/*!
 * @author liyuelong1020@gmail.com
 * @date 2018/1/30 030
 * @description 根据设计稿获取宽高比例
 */

import {Dimensions, PixelRatio} from 'react-native';

const baseWidth = 1080;
const baseHeight = 1920;

const {height, width} = Dimensions.get('window');

export function getWidth (w) {
    return Math.floor(w / baseWidth * width);
}

export function getHeight (h) {
    return Math.floor(h / baseHeight * height);
}
