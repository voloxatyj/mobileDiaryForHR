import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Header() {
	return (
		<View	style={styles.header}>
			<Text style={styles.title}>Users Todos</Text>
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
		fontSize: 20,
		fontWeight: 'bold'
	}
});