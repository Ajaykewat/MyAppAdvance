import { StyleSheet, Text, TouchableOpacity, View,Alert } from 'react-native'
import React, { memo, useCallback, useMemo } from 'react';
import BigList from "react-native-big-list";


  const MyListItem =({label,value})=>{
    return(
        <TouchableOpacity 
        disabled
        onPress={()=> Alert.alert("you clicked",`${value}`)}
        style={{
            flex:1,
            backgroundColor:"green",
            // flexDirection:"row",
            // justifyContent:"space-between",
            alignItems:"center",
            paddingHorizontal:30
            }}>
            <Text style={{color:"#fff"}}>{label}</Text>
            {/* <Text style={{color:"#fff"}}>{value}</Text> */}
        </TouchableOpacity>
    )
  }

  const MyHeader = ()=>{
    return(
        <View>
            <Text>header</Text>
        </View>
    )
  }
  const MyFooter = ()=>{
    return(
        <View>
            <Text>MyFooter</Text>
        </View>
    )
  }
  const MyEmpty = ()=>{
    return(
        <View>
            <Text>MyEmpty</Text>
        </View>
    )
  }
  const MySectionHeader = ()=>{
    return(
        <View>
            <Text>MySectionHeader</Text>
        </View>
    )
  }
  const MySectionFooter = ()=>{
    return(
        <View>
            <Text>MySectionFooter</Text>
        </View>
    )
  }

const Home = () => {

    
const data = [];

    for(let i=0;i<100;i++){
        const Array1 =[
            { label: i, value: i },
            { label: i+1, value: i+1 },
        ]
        const Array2 =[{ label: i, value: i }]
        // data.push(Array1)
        data.push({ label: i, value: i })
    }

    const renderItem = useCallback(( item ) => {
        console.log(item.item.label)
        return(
    <MyListItem 
    label={item.item.label}
    value={item.item.value}
     />)},[data])

//     const renderEmpty = () => <MyEmpty />;
const renderHeader = () => <MyHeader />;
const renderFooter = () => <MyFooter />
const renderSectionHeader = () => <MySectionHeader />;
const renderSectionFooter = () => <MySectionFooter />;
  return (
    <BigList
    data={data}
    // sections={data}
    renderItem={renderItem}
    // numColumns={5}
    // renderEmpty={renderEmpty}
    // keyExtractor={item => item.value}
    renderHeader={renderHeader}
    renderFooter={renderFooter}
    renderSectionHeader={renderSectionHeader}
    renderSectionFooter={renderSectionFooter}
    itemHeight={30} // Required (default 0)
    headerHeight={20} // Required to show header
    sectionHeaderHeight={50}
    sectionfooterHeight={50}
    footerHeight={20} // Required to show footer
  />
  )
}

export default memo(Home) 

const styles = StyleSheet.create({})