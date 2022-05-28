import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/screens/Home';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import About from './src/screens/About';
import Course from './src/screens/Course';
import ContactUs from './src/screens/ContactUs';
import UserData from './src/screens/UserData';
import Menu from './components/Menu';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  JosefinSans_400Regular,
  JosefinSans_500Medium,
} from "@expo-google-fonts/josefin-sans";
import { Nunito_600SemiBold, Nunito_700Bold } from "@expo-google-fonts/nunito";


export default function App() {
  const Stack=createNativeStackNavigator()
  let [fontsLoaded]=useFonts({
    JosefinSans_400Regular,
    JosefinSans_500Medium,
    Nunito_600SemiBold,
    Nunito_700Bold,
  })
  if(!fontsLoaded){
    <AppLoading/>
  }
  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName='Home'>
      {/* <Stack.Screen name='Home' component={Home}/>  */}
        <Stack.Screen name='Home'
          options={{
            headerShown:false,
          }}>
          {(props)=><Home {...props}
            channelName={"Our Learning App"}

          />}
          </Stack.Screen>
          <Stack.Screen name='Course' component={Course}
          options={{
            headerTitleStyle: {
              fontSize: 25,
              fontFamily: "Nunito_600SemiBold",
            },
            headerTitle: "Courses",
            headerTitleAlign: "center",
          }}></Stack.Screen>
          <Stack.Screen name='Student' component={UserData}
          options={{
            headerTitleStyle: {
              fontSize: 25,
              fontFamily: "Nunito_600SemiBold",
            },
            headerTitle: "Students Data",
            headerTitleAlign: "center",
          }}></Stack.Screen>
          <Stack.Screen name='Contact' component={ContactUs}
          options={{
            headerTitleStyle: {
              fontSize: 25,
              fontFamily: "Nunito_600SemiBold",
            },
            headerTitle: "Contact Us",
            headerTitleAlign: "center",
          }}></Stack.Screen>
          <Stack.Screen name='About' component={About}
          options={{
            headerTitleStyle: {
              fontSize: 25,
              fontFamily: "Nunito_600SemiBold",
            },
            headerTitle: "About",
            headerTitleAlign: "center",
          }}></Stack.Screen>
        
        
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: '#fff',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
});
