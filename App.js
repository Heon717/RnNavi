/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React,{Component} from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {StyleSheet,Text,View,Image, Button} from 'react-native';
import StackHomeScreen from './src/home';
import UserScreen from './src/user';
import LogoTitle from './src/logo';
import DrawerHomeScreen from './src/home_drawer';
import DrawerUserScreen from './src/user_drawer';
import TabHomeScreen from './src/home_tap';
import TabUserScreen from './src/user_tap';
import TabMessageScreen from './src/message_tab';
import MessageImg from './src/assets/images/comments.png';
import ICON from 'react-native-vector-icons/dist/Ionicons';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const MainScreen = () => {
  return (
    <Tab.Navigator
    initialRouteName='Home'
    screenOptions={({route}) => ({
      tabBarLabel: route.name,
      tabBarIcon: ({focused}) => (
        TabBarIcon(focused, route.name)
      ),
      tabBarActiveBackgroundColor: 'skyblue',
      tabBarActiveTintColor: 'blue',
      tabBarInactiveTintColor: '#fff',
      tabBarInactiveBackgroundColor: 'pink',
      tabBarLabelPosition:'beside-icon'
    })}
  >
    <Tab.Screen name="Home" component={TabHomeScreen}/>
    <Tab.Screen name="User" component={TabUserScreen}/>
    <Tab.Screen name="Message" component={TabMessageScreen}/>
  </Tab.Navigator>
  );
}


const TabBarIcon = (focused,name) => {
  let iconImagePath;
  if(name ==='Home') {
    iconImagePath = require('./src/assets/images/comments.png');
  } else if (name === 'User') {
    iconImagePath = require('./src/assets/images/profile.png');
  } else if (name === 'Message') {
    iconImagePath = require('./src/assets/images/house.png');
  }
  return (
    <Image
      style={{
        width: focused ? 26 : 20,
        height: focused ? 26 : 20
      }}
      source={iconImagePath}
    />
  );
}
const App = () => {
 return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Main' component={MainScreen}/>
        <Stack.Screen name='Home_Stack' component={StackHomeScreen}/>
      </Stack.Navigator>
    </NavigationContainer>

    // <NavigationContainer>
    //   <Drawer.Navigator>
    //     <Drawer.Screen name='Home' component={DrawerHomeScreen}/>
    //     <Drawer.Screen name='User' component={DrawerUserScreen}/>
    //   </Drawer.Navigator>
    // </NavigationContainer>

    // <NavigationContainer>
    //   <Stack.Navigator 
    //     nitialRouteName='Home'
    //     screenOptions={{
    //       headerStyle: {
    //         backgroundColor: '#a4511e'
    //       },
    //       headerTintColor: '#fff',
    //       headerTitleStyle: {
    //         fontWeight:'bold',
    //         color:'#f3d612'
    //        }
    //     }}
    //   >
    //     <Stack.Screen 
    //       name='Home'
    //       component={HomeScreen}
    //       options={{
    //         title:"Home Screen",
    //         headerTitle: () => <LogoTitle/>,
    //         headerRight:() => (
    //           <Button
    //             title='Info'
    //             onPress={() => {alert('버튼!!')}}
    //             color='orange'
    //           />
    //         )
    //       }}
    //       />
    //     <Stack.Screen 
    //       name='User' 
    //       component={UserScreen}
    //       initialParams={{
    //         userIdx: 50,
    //         userName: 'duna',
    //         userLastName: 'Bae'
    //       }}/>
    //   </Stack.Navigator>
    // </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  
});

export default App;
