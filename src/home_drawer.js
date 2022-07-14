/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
//  import 'react-native-gesture-handler';
 import React,{Component} from 'react';
 import {StyleSheet,Text,View,Button} from 'react-native';

 const DrawerHomeScreen = ({navigation}) => {
    return (
        <View style={{
            flex:1,
            alignItems:'center',
            justifyContent:'center'
           }}>
            <Text>home</Text>
            <Button
                title="To User Screen"
                onPress={()=> {
                    navigation.navigate('User')
                }}
            />
        </View>
    );
 }
 
 const styles = StyleSheet.create({
   
 });
 
 export default DrawerHomeScreen;
 