import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
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



const Stack = createNativeStackNavigator();
const RootNavigator = () => {
  return (
    <NavigationContainer>
      <ChartsExplorer/>
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