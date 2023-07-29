import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../screens/HomeScreen';
import DetailsScreen from '../screens/DetailsScreen';
import { NavigatorScreenParams } from '@react-navigation/native';
import TabsNavigator, { TabsStackParamList } from './TabsNavigator';

export type RootStackParamList = {
  TabsStack: NavigatorScreenParams<TabsStackParamList>;
  Details: undefined;
}

const RootStack = createNativeStackNavigator<RootStackParamList>()

const RootNavigator = () => {
  return (
    <RootStack.Navigator>
      <RootStack.Screen name='TabsStack' component={TabsNavigator} options={{headerShown: false}}/>
      <RootStack.Screen name='Details' component={DetailsScreen}/>
    </RootStack.Navigator>
  )
}

export default RootNavigator