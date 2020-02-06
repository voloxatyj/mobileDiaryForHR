import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Header from './components/header';
import UserItem from './components/userItem';
import AddUser from './components/addUser';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import Navigator from './routes/drawer';

const getFonts = () => {
  Font.loadAsync({
    'abril-regular': require('./assets/fonts/AbrilFatface-Regular.ttf'),
    'dancing-regular': require('./assets/fonts/DancingScript-Regular.ttf')
  })
}

export default function App() {
  const [users, setUsers] = useState();
  const [fontsLoaded, setFontsLoaded] = useState(false);
  
  const pressHandler = (id) => {
    setUsers((prevUsers)=>{
      return prevUsers.filter(users => users.id != id)
    })
  }

  /* request API to json.placeholder to get users */
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users') 
      .then(res => res.json())
      .then(res => {
        setUsers(res);
      })
  })

  /* Add data for new User*/
  const onSubmitHandler = (name_surname, company, address, email) =>{
    if (name_surname.length>3){
      setUsers((prevUsers) => {
        return [
          {
            id: Math.random().toString(),
            name: name_surname,
            company: {
              name: company
            },
            address: address,
            email: email
          },
          ...prevUsers
        ]
      });
    } else {
      Alert.alert('OOPS!', 'Emploee name must be longer than three characters!', [
        {text: 'Understood', onPress: () => console.log('alert closed')}
      ])
    }
  }
  
  if (fontsLoaded) {
  return (
    <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()}>
      <View style={styles.container}>
        <Navigator />
          <Header />
          <View style={styles.content}>
            <AddUser onSubmitHandler={onSubmitHandler}/>
            <View style={styles.list}>
              <FlatList
                keyExtractor={item => item.id.toString()}   
                data={users}
                renderItem={({item}) => (
                  <UserItem item={item} pressHandler={pressHandler}/>
                )}
              />
            </View>
          </View>
      </View>
    </TouchableWithoutFeedback>  
    );
  } else {
    return(
      <AppLoading
        startAsync={getFonts}
        onFinish={() => setFontsLoaded(true)}
      />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20,
  }
});
