import { StyleSheet, Text, TouchableOpacity, View,Image } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { useNavigation } from '@react-navigation/native'
import React from 'react'

const Menu = () => {
    const navigation=useNavigation()
  return (
    <View style={styles.menuContainer}>
        <TouchableOpacity
            style={styles.buttonStyle}
            onPress={()=>navigation.navigate('Course')}>
            <Image
            style={styles.iconStytle}
            
             source={{
                    uri: "https://img.icons8.com/stickers/90/000000/training.png",
          }}
        />       
        </TouchableOpacity>

        <TouchableOpacity
            style={styles.buttonStyle}
            onPress={()=>navigation.navigate('About')}>
            <Image
          style={styles.iconStytle}
          source={{
            uri: "https://img.icons8.com/stickers/100/000000/about.png",
          }}
        />      
        </TouchableOpacity>

        <TouchableOpacity
            style={styles.buttonStyle}
            onPress={()=>navigation.navigate('Contact')}>
            <Image
          style={styles.iconStytle}
          source={{
            uri: "https://img.icons8.com/stickers/100/000000/phone-office.png",
          }}
        />
        </TouchableOpacity>

        <TouchableOpacity
            style={styles.buttonStyle}
            onPress={()=>navigation.navigate('Student')}>

            <Image
          style={styles.iconStytle}
          source={{
            uri: "https://img.icons8.com/stickers/100/000000/conference.png",
          }}/>    
        </TouchableOpacity>      

      
    </View>
  )
}

const styles = StyleSheet.create({
    menuContainer: {
        flexDirection: "row",
        justifyContent:'space-evenly',
        marginBottom:15
        
        
      },
      textStyle: {
        textTransform: "uppercase",
      },
      iconStytle: {
        width: 40,
        height: 30,
        aspectRatio:1
       
      },
      buttonStyle:{
          flexDirection:'row',
          justifyContent:'space-between'
      }
})

export default Menu

