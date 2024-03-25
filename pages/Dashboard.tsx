import React from "react";
import { Text,View,StyleSheet } from "react-native";
import { Calendar } from "react-native-calendars";

const Dashboard = () => {
  return (
    <View style= {{flex:1,borderStartColor:"white",justifyContent:"flex-start",alignItems:"top"}}>
      <Text style={styles.calenders}>CALENDER</Text>
      <Calendar/>
      </View>
  )
}


const styles = StyleSheet.create({
  calenders: {
      height: 40,
      padding: 10,
      color: 'red',
  },

})




export default Dashboard;