import { StackNavigator } from 'react-navigation';
import { HomeScreen } from '../screens/HomeScreen';
import { PdfScreen } from '../screens/PdfScreen';
import { JsonScreen } from '../screens/JsonScreen';
 
const AppNavigation = StackNavigator({
	HomeScreen: { screen: HomeScreen },
	PdfScreen: { screen: PdfScreen },
	JsonScreen: { screen: JsonScreen }
}, {
	headerMode: 'screen',
	initialRouteName: 'HomeScreen'
});

export { AppNavigation };