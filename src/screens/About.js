import { StyleSheet, Text, View, Linking,TouchableOpacity,Image } from 'react-native'
import React from 'react'

const About = () => {
    return (
        <View style={styles.aboutContainer}>
          <Text style={styles.mainHeader}> Abhay AKG </Text>
          <Text style={styles.paraStyle}> I am a React Native App Developer 😀 </Text>
    
          <View>
            <Image
              style={styles.imgStyle}
              source={{
                uri: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
              }}
            />
          </View>
    
          <View style={styles.aboutLayout}>
            <Text style={styles.aboutSubHeader}> About me </Text>
            <Text style={[styles.paraStyle, styles.aboutPara]}>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Lorem ipsum dolor sit amet, consectetuer
              adipiscing elit. Aenean commodo ligula eget dolor.
            </Text>
          </View>
    
          <Text style={styles.mainHeader}> Follow me on Social Network </Text>
    
          <View style={styles.menuContainer}>
            <TouchableOpacity
              style={styles.buttonStyle}
              onPress={() =>
                Linking.openURL("https://www.instagram.com/abhay_akg/")
              }>
              <Image
                style={styles.iconStyle}
                source={{
                  uri: "https://cdn-icons-png.flaticon.com/512/2111/2111463.png",
                }}
              />
            </TouchableOpacity>
    
            <TouchableOpacity
              style={styles.buttonStyle}
              onPress={() =>
                Linking.openURL(
                  "https://www.linkedin.com/in/abhay-kumar-2084b8155/"
                )
              }>
              <Image
                style={styles.iconStyle}
                source={{
                  uri: "https://cdn-icons.flaticon.com/png/128/3536/premium/3536505.png?token=exp=1653733431~hmac=207fd98dd3925e0a2e51c0a51d5319f6",
                }}
              />
            </TouchableOpacity>
    
            <TouchableOpacity
              style={styles.buttonStyle}
              onPress={() => Linking.openURL("https://www.facebook.com/profile.php?id=100006440455228")}>
              <Image
                style={styles.iconStyle}
                source={{
                  uri: "https://cdn-icons-png.flaticon.com/128/733/733547.png",
                }}
              />
            </TouchableOpacity>
          </View>
        </View>
      );
}
const styles = StyleSheet.create({
    aboutContainer: {
        display: "flex",
        alignItems: "center",
      },
    
      imgStyle: {
        width: 150,
        height: 150,
        borderRadius: 100,
      },
      mainHeader: {
        fontSize: 18,
        color: "#344055",
        textTransform: "uppercase",
        fontWeight: "500",
        marginTop: 50,
        marginBottom: 10,
        fontFamily: "JosefinSans_700Bold",
      },
      paraStyle: {
        fontSize: 18,
        color: "#7d7d7d",
        paddingBottom: 30,
      },
      aboutLayout: {
        backgroundColor: "#4c5dab",
        paddingHorizontal: 30,
        marginVertical: 30,
      },
      aboutSubHeader: {
        fontSize: 18,
        color: "#fff",
        textTransform: "uppercase",
        fontWeight: "500",
        marginVertical: 15,
        fontFamily: "JosefinSans_700Bold",
        alignSelf: "center",
      },
      aboutPara: {
        color: "#fff",
      },
      menuContainer: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-evenly",
      },
    
      iconStyle: {
        width: "100%",
        height: 50,
        aspectRatio: 1,
      },
})

export default About

