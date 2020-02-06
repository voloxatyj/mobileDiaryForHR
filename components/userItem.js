import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons'

export default function UserItem({ item, pressHandler }){
		return (
				<TouchableOpacity onPress={() => pressHandler(item.id)}>
					<View style={styles.item}>
						<AntDesign name='deleteuser' size={24} color='red'/>
						<Text style={styles.main}>Employee: {item.name}</Text>
						<Text style={styles.company}>Company: {item.company.name}</Text>
						<Text style={styles.rest}>City: {item.address.city}, street: {item.address.street}</Text>
						<Text style={styles.rest}>email: {item.email}</Text>
					</View>
				</TouchableOpacity>
		)
}

const styles = StyleSheet.create({
	item: {
		padding: 16,
		marginTop: 16,
		borderColor: '#482569',
		borderWidth: 1,
		borderStyle: 'dashed',
		borderRadius: 16,
		backgroundColor: '#d1b1ef',
		flexDirection: 'column',
	},
	rest: {
		fontSize: 10,
		fontStyle: 'italic',
		display: 'flex',
		justifyContent: 'space-around',
		paddingTop: 12,
		fontFamily: 'dancing-regular'
	},
	main: {
		textAlign: 'center',
		color: '#f4f4f4',
		fontSize: 22,
		fontWeight: 'bold',
		fontFamily: 'abril-regular'
	},
	company: {
		textAlign: 'center',
		color: '#7b4880',		
		fontWeight: 'bold',
		fontFamily: 'abril-regular'
	}
})