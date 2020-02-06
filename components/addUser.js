import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button, Text } from 'react-native';

export default function AddTodo ({ onSubmitHandler }) {
	[name_surname, setName_Surname] = useState('');
	[company, setCompany] = useState('');
	[address, setAddress] = useState('');
	[email, setEmail] = useState('')

	const handleName_Surname = (val) => {
		setName_Surname(val);
	};

	const handleCompany = (val) => {
		setCompany(val);
	};

	const handleAddress = (val) => {
		setAddress(val);
	};

	const handleEmail = (val) => {
		setEmail(val);
	};

	return (
		<View>
			<Text style={styles.label}>field for name_surname</Text>
			<TextInput
				style={styles.input}
				placeholder='please, write name and surname'
				onChangeText={handleName_Surname}
				textContentType='name'
				placeholderTextColor='#00000087'
			/>
			<Text style={styles.label}>field for name of Company</Text>
			<TextInput
				style={styles.input}
				placeholder='please, write name of Company'
				onChangeText={handleCompany}
				textContentType='organizationName'
				placeholderTextColor='#00000087'
			/>
			<Text style={styles.label}>field for address</Text>
			<TextInput
				style={styles.input}
				placeholder='please, write address'
				onChangeText={handleAddress}
				textContentType='fullStreetAddress'
				placeholderTextColor='#00000087'
			/>
			<Text style={styles.label}>field for email</Text>
			<TextInput
				style={styles.input}
				placeholder='please, write email'
				onChangeText={handleEmail}
				textContentType='emailAddress'
				placeholderTextColor='#00000087'
			/>
			<Button color='purple' onPress={() => onSubmitHandler(name_surname, company, address, email)} title='add data of employee' />
		</View>
	);
}

const styles = StyleSheet.create({
	input: {
		marginBottom: 10,
		paddingHorizontal: 8,
		paddingVertical: 6,
		borderBottomWidth: 1,
		borderBottomColor: '#ddd',
	},
	label: {
		fontSize: 10,
		fontStyle: 'italic',
		color: 'purple'
	}
});