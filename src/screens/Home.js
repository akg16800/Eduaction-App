import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Menu from '../../components/Menu'

const Home = (props) => {
    const description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,"
  return (
    <View style={styles.mainContainer}>
    <View style={styles.homeTop}>
        <Image
            style={styles.headerImage}
            resizeMode="contain"
            source={require('../../assets/edu_photo.jpg')}

        />
        <Text style={styles.mainHeader}>Welcome to</Text>
        <Text 
        style={[styles.mainHeader,
                {
                    fontSize:33,
                    color:"#4c5bad",
                    marginTop:0
                }
        ]}>{props.channelName}</Text>

        <Text style={styles.paraStyle}>{description}</Text>      



    </View>
    <View style={styles.menuStyles}>
    <View style={styles.lineStyle}></View>
            <Menu/>
            {/* <View
                style={[styles.lineStyle,{
                    marginVertical:20,
                }]}>

            </View> */}
        </View>
      
    </View>
  )
}




const styles = StyleSheet.create({
    mainContainer: {
      height: "100%",
      display: "flex",
      justifyContent: 'space-around',
      paddingHorizontal: 20,
      backgroundColor: "#fff",
      textAlign: "center",
    },
  
    homeTop: {
      // height: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      paddingHorizontal: 10,
    },
  
    headerImage: {
      height: undefined,
      width: "100%",
      aspectRatio: 1.2,
      display: "flex",
      alignItems: "stretch",
      marginTop: 50,
      marginBottom:25,
      borderRadius: 20,
    },
  
    mainHeader: {
      fontSize: 30,
      color: "#344055",
      textTransform: "uppercase",
      fontFamily: "Nunito_600SemiBold",
    },
  
    paraStyle: {
      textAlign: "left",
      fontSize: 19,
      color: "#7d7d7d",
      marginTop: 30,
      paddingBottom: 50,
      lineHeight: 26,
      fontFamily: "JosefinSans_400Regular",
    },
    lineStyle:{
        marginBottom:10,
        borderWidth:0.5,
        borderColor:'grey'
    }

})
export default Home;