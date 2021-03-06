/**
 * @format
 */
import 'react-native-gesture-handler'
import { AppRegistry } from 'react-native'
import DeviceInfo from 'react-native-device-info'
import { App as TestApp } from './App/testApp'
import { App as ProdApp } from './App/prodApp/app'
import { name as appName } from './app.json'
import codePush from 'react-native-code-push'

const App = codePush(DeviceInfo.getBundleId().match('nativetesting') ? TestApp : ProdApp)
AppRegistry.registerComponent(appName, () => App)
