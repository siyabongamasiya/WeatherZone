import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./Presentation/Screens/HomeScreen";
import DetailsScreen from "./Presentation/Screens/DetailsScreen";
import { Homestyles,Colors } from "./Presentation/Styles";
import { Forecast,WeatherItem,TopBar ,WeatherCard,WeatherCardDetails,OvalButton} from "./Presentation/Components/components";
import { View ,TextInput,SafeAreaView} from "react-native";


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Details" component={DetailsScreen} options={{
    headerStyle: {
      backgroundColor: Colors.accent, 
    }
  }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// export default function App() {
//   return (
//     <View style = {{ 
//       flex : 1,
//       alignItems : "center",
//       justifyContent : "center"}}>
//       <TextInput
//         style={Homestyles.searchBar}
//         placeholder="Search Area"
//         value={""}
//         onChangeText={() => {}}
//       />
//     </View>
//   );
// }