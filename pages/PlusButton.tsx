import React, { useState } from "react";
import { TouchableOpacity,Text,StyleSheet,Button, View, Animated } from "react-native";
import  Icon  from "react-native-vector-icons/FontAwesome";
const PlusButton  = () => {
    const [icon1] = useState( new Animated .Value(4))
    return(
        <View style={{
            flex:1,
}}>
            <Animated.View  style={[styles.circle,{}]}>
                <TouchableOpacity>
                    <Icon name="cloud-upload" size={25} color="#FFFF"/>
                </TouchableOpacity>
            </Animated.View>
            <TouchableOpacity 
            style={styles.circle}
            onPress={() => {
                //
            }}>
                <Icon name="plus" size={25} color="#" />
            </TouchableOpacity>
        </View>
    )
}

export default PlusButton;
const styles = StyleSheet.create({
    circle:{
        backgroundColor:'#f52d56',
        width:100,
        height:100,
        position:'absolute',
        bottom:40,
        right:40,
        borderRadius:50,
        justifyContent:'center',
        alignItems:'center',
}
})