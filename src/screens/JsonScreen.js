import React, { Component } from 'react';
import JSONTree from 'react-native-json-tree';
import { Text } from 'react-native';

export class JsonScreen extends Component {
	static navigationOptions = {
     header: null
  }

	render() {
		const { json } = this.props.navigation.state.params;
		return (
			<JSONTree data={json} 
				labelRenderer={raw => <Text style={{ fontWeight: 'bold' }}>{raw}</Text>}
  			valueRenderer={raw => <Text style={{ fontStyle: 'italic' }}>{raw}</Text>}
			/>
		);
	}
}