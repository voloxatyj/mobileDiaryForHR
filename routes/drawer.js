import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import AddUser from '../components/addUser';
import About from '../components/about';

const RootDrawerNavigator = createDrawerNavigator({
	AddUser: {
		screen: AddUser
	},
	About: {
		screen: About
	}
})

export default createAppContainer(RootDrawerNavigator);