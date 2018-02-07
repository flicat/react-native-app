import { AppRegistry } from 'react-native';
import App from './App';
import Orientation from 'react-native-orientation';

// 锁定竖屏
Orientation.lockToPortrait();

AppRegistry.registerComponent('guiren_rn', () => App);
