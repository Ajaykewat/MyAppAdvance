import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ChartList from '../screens/ChartList';
import { 
  AxisLineChartScreen ,
  BarChartScreen ,
   BubbleChartScreen,
  CandleStickChartScreen ,
  ChartsListScreen ,
  CombinedChartScreen ,
  GroupBarChartScreen ,
  HorizontalBarChartScreen ,
  InfiniteScrollLineChartScreen ,
  LineChartGradientScreen ,
  LineChartScreen ,
  LinkageChartScreen ,
  LiveUpdateChartScreen ,
  MovingWindowChartScreen ,
  MultipleChartScreen ,
  PieChartScreen , 
  RadarChartScreen ,
  ScatterChartScreen ,
  StackedBarChartScreen ,
  StockChartScreen ,
  TimeSeriesLineChartScreen ,
  ZeroLineChartScreen 
 } from '../ChartsScreen';
import ChartsExplorer from '../ChartsScreen/ChartsListScreen';
import GlobalModal, { ModalController } from "react-native-global-modal-2"
import Profile from '../screens/LensUI/Profiles';
import ViewComments from '../screens/LensUI/ViewComments';
import ViewFollowing from '../screens/LensUI/ViewFollowing';
import ProfileView from '../screens/LensUI/ViewProfile';
import ProfileViewD from '../screens/LensUI/ViewProfileDarkTheme';



const Stack = createNativeStackNavigator();
const RootNavigator = () => {


  const data: ModalData = {
    title: 'Update available',
    description: 'A new software version is available for download',
    primaryButtonText: 'Update',
    outlineButtonText: 'Not now',
    // titleProps: {
    //   imageSource: require('./assets/cross.png'),
    // },
    onPrimaryButtonPress: () => {ModalController.hide()},
    onOutlineButtonPress: () => {},
  };
  useEffect(()=>{
    // ModalController.show(data);
  },[])
  // Show
 
  // Hide
  // 

  return (
    <NavigationContainer>
      {/* <ChartsExplorer/> */}
      <GlobalModal
      animationIn="fadeIn"
      animationOut="fadeOut"
      onBackdropPress={ModalController.hide}
      />
      {/* Feed list */}
      <Stack.Navigator initialRouteName='Profile'>
         <Stack.Screen name="Profile" component={Profile} />
         <Stack.Screen name="Comment" component={ViewComments} />
         <Stack.Screen name="Following" component={ViewFollowing} />
         <Stack.Screen name="ProfileView" component={ProfileView} />
         <Stack.Screen name="ProfileViewD" component={ProfileViewD} />
      </Stack.Navigator>
        {/* <Stack.Navigator>
        <Stack.Screen name="ChartList" component={ChartList} />
        <Stack.Screen name="AxisLineChartScreen" component={AxisLineChartScreen} />
        <Stack.Screen name="BarChartScreen" component={BarChartScreen} />
        <Stack.Screen name="BubbleChartScreen" component={BubbleChartScreen} />
        <Stack.Screen name="CandleStickChartScreen" component={CandleStickChartScreen} />
        <Stack.Screen name="ChartsListScreen" component={ChartsListScreen} />
        <Stack.Screen name="CombinedChartScreen" component={CombinedChartScreen} />
        <Stack.Screen name="GroupBarChartScreen" component={GroupBarChartScreen} />
        <Stack.Screen name="HorizontalBarChartScreen" component={HorizontalBarChartScreen} />
        <Stack.Screen name="InfiniteScrollLineChartScreen" component={InfiniteScrollLineChartScreen} />
        <Stack.Screen name="LineChartGradientScreen" component={LineChartGradientScreen} />
        <Stack.Screen name="LineChartScreen" component={LineChartScreen} />
        <Stack.Screen name="LinkageChartScreen" component={LinkageChartScreen} />
        <Stack.Screen name="LiveUpdateChartScreen" component={LiveUpdateChartScreen} />
        <Stack.Screen name="MovingWindowChartScreen" component={MovingWindowChartScreen} />
        <Stack.Screen name="MultipleChartScreen" component={MultipleChartScreen} />
        <Stack.Screen name="PieChartScreen" component={PieChartScreen} />
        <Stack.Screen name="RadarChartScreen" component={RadarChartScreen} />
        <Stack.Screen name="ScatterChartScreen" component={ScatterChartScreen} />
        <Stack.Screen name="StackedBarChartScreen" component={StackedBarChartScreen} />
        <Stack.Screen name="StockChartScreen" component={StockChartScreen} />
        <Stack.Screen name="StockChartScreen" component={StockChartScreen} />
        <Stack.Screen name="TimeSeriesLineChartScreen" component={TimeSeriesLineChartScreen} />
        <Stack.Screen name="ZeroLineChartScreen" component={ZeroLineChartScreen} />
      </Stack.Navigator> */}
    </NavigationContainer>
  )
}

export default RootNavigator

const styles = StyleSheet.create({})