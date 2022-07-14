import React,{Component} from 'react';
import { Image } from 'react-native';
import Logo from './assets/images/house.png';

const LogoTitle = () =>  (
    <Image
      style={{width:40,height:40}}
      source={Logo}
    />
);

export default LogoTitle;