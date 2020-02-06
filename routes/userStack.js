import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import UserItem from '../components/userItem';
import AddUser from '../components/addUser';

const screens = {
	User: {
		screen: UserItem
	},
	AddUser: {
		screen: AddUser
	}
}

const UserStack = createStackNavigator(screens);

export default createAppContainer(UserStack);