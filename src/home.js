/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
 import React,{Component} from 'react';
 import {StyleSheet,Text,View, Button} from 'react-native';
 
 const HomeScreen = ({navigation}) => {
  return (
     <View style={{
      flex:1,
      alignItems:'center',
      justifyContent:'center'
     }}>
       <Text>HomeScreen</Text>
       <Button 
        title='To User Screen'
        onPress={()=> {
          navigation.navigate('User',{
            userIdx: 100,
            userName: 'Suji',
            userLastName: 'Bae'
          })
        }}/>
        <Button
          title="Change the title"
          onPress={()=> {
            navigation.setOptions({
              title: 'Changed!!!!',
              headerStyle: {
                backgroundColor: 'pink'
              },
              headerTintColor: 'red'
            })
          }}
        />
     </View>
   );
 };
 
 const styles = StyleSheet.create({
   
 });
 
 export default HomeScreen;
 