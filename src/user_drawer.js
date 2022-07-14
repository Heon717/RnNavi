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

 const DrawerUserScreen = ({navigation}) => {
    return (
        <View style={{
            flex:1,
            alignItems:'center',
            justifyContent:'center'
           }}>
            <Text>home</Text>
            <Button
                title="To Home Screen"
                onPress={()=> {
                    navigation.navigate('Home')
                }}
            />
        </View>
    );
 }
 
 const styles = StyleSheet.create({
   
 });
 
 export default DrawerUserScreen;
 