import React, { Component } from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';

const log = () => {
  console.log('please attach method to this component');
};

const CircularButton = props => {
	const { onPress, title } = props	
	return (
		<View style={styles.buttonContainer}>
			<TouchableOpacity onPress={onPress || log}>
				<Text style={styles.button}>
					{title || 'Button'}
				</Text>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	buttonContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      marginBottom: 20,
      marginTop: 20,
    },
    button: {
      backgroundColor: '#69B4FF',
      textAlignVertical: 'center',
      padding: 8,
      fontWeight: '500',
      textAlign: 'center',
      color: 'white',
      borderRadius: 200,
      fontSize: 18,
      width: 100,
      height: 100,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      marginBottom: 10,
      elevation: 2,
    },
})

export { CircularButton };