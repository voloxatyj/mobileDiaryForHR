import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function About () {
	return (
		<View style={styles.header}>
			<Text style={styles.title}>What can I say about this employees</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	header: {
		height: 80,
		padding: 38,
		backgroundColor: '#613190'
	},
	title: {
		textAlign: 'center',
		color: '#fff',
		fontSize: 26,
		fontFamily: 'dancing-regular',
		fontWeight: 'bold'
	}
});