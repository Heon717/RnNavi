/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
 import React,{Component} from 'react';
 import {StyleSheet,Text,View,Button} from 'react-native';

 const TabHomeScreen = ({navigation}) => {
    return (
        <View style={{
            flex:1,
            alignItems:'center',
            justifyContent:'center'
           }}>
            <Text>HomeScreen</Text>
            <Button
                title='Go To Home Stack Screen'
                onPress={()=> {
                    navigation.navigate('Home_Stack');
                }}/>
        </View>
    );
 }

 export default TabHomeScreen;
 