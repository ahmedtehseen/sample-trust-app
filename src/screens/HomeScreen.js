import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import axios from 'axios';
import Spinner from 'react-native-loading-spinner-overlay';
import styles from '../styles/mainStyle';

import { CircularButton } from '../components/CircularButton';

export class HomeScreen extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isLoading: false
		}
	}
	static navigationOptions = {
		 header: null
	}

	componentDidMount() {
    SplashScreen.hide();
  }

  async getJson() {
  	this.setState({ isLoading: true });
		const response = await axios.get('https://dev.onedigitaltrust.com/?i=docassemble.playground1%3ATestReactNativeJSON.yml&json=1');
		const json = response.data;
		this.setState({ isLoading: false });
		this.props.navigation.navigate('JsonScreen', {json});
  }

	render() {
		const { navigate } = this.props.navigation;
		return (
			<View style={styles.container}>
				<CircularButton title='Get PDF' onPress={() => navigate('PdfScreen')}/>
				<CircularButton title='Get JSON' onPress={() => this.getJson()}/>
				<Spinner visible={this.state.isLoading} />
			</View>
		);
	}
}
