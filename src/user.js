/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
 import React,{Component} from 'react';
 import {StyleSheet,Text,View,Button} from 'react-native';
 
 const UserScreen = ({navigation,route}) => {

  const headerStyle = () => {
    navigation.setOptions({
      title:"Customizing",
      headerStyle: {
        backgroundColor: 'blue'
      },
       headerTintColor: 'yellow',
       headerTitleStyle: {
       fontWeight:'bold',
       color:'green'
      },
      headerRight: ()=>(
        <Button
          title='홈으로'
          onPress={()=>{
            navigation.navigate("Home")
          }}
          color='orange'
        />
      )
    })
  }

  headerStyle();
  //  const {userIdx,userName,userLastName} = route.params;
  const {params} = route;
  const userIdx = params ? params.userIdx : null;
  const userName = params ? params.userName : null;
  const userLastName = params ? params.userLastName : null;

  return (
    <View style={{
     flex:1,
     alignItems:'center',
     justifyContent:'center'
    }}>
      <Text>UserScreen</Text>
      <Button 
       title='To Home Screen'
       onPress={()=> {
         navigation.navigate('Home')
       }}/>

       <Text>User idx : {JSON.stringify(userIdx)}</Text>
       <Text>User Name : {JSON.stringify(userName)}</Text>
       <Text>User Last Name : {JSON.stringify(userLastName)}</Text>
    </View>
  );
};
 
 const styles = StyleSheet.create({
   
 });
 
 export default UserScreen;
 