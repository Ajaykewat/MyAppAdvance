import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react';

const ChatData = [
    "AxisLineChartScreen" ,
    "BarChartScreen" ,
     "BubbleChartScreen",
    "CandleStickChartScreen" ,
    "ChartsListScreen" ,
    "CombinedChartScreen" ,
    "GroupBarChartScreen" ,
    "HorizontalBarChartScreen" ,
    "InfiniteScrollLineChartScreen" ,
    "LineChartGradientScreen" ,
    "LineChartScreen" ,
    "LinkageChartScreen" ,
    "LiveUpdateChartScreen" ,
    "MovingWindowChartScreen" ,
    "MultipleChartScreen" ,
    "PieChartScreen" , 
    "RadarChartScreen" ,
    "ScatterChartScreen" ,
    "StackedBarChartScreen" ,
    "StockChartScreen" ,
    "TimeSeriesLineChartScreen" ,
    "ZeroLineChartScreen" 
]

const ChartList = ({navigation}) => {
  return (
    <View style={styles.container}>
      {
        ChatData.map((item,index)=>{
            return(
                <Pressable
                onPress={()=> navigation.navigate(item)}
                key={index}
                 style={{
                    padding:10,
                    marginHorizontal:20,
                    marginVertical:10,
                    backgroundColor:"#3a3737",
                    justifyContent:"center",
                    alignItems:"center"
                }}>
                    <Text
                    style={{
                        textAlign:"center",
                        fontSize:20,
                        fontWeight:"700",
                        color:"white"
                    }}
                    >{item}</Text>
                </Pressable>
            )
        })
      }
    </View>
  )
}

export default ChartList

const styles = StyleSheet.create({
    container:{
        flex:1,
        // justifyContent:"center",
        // alignItems:"center"
    }
})