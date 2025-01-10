import { StyleSheet } from "react-native";
import { SearchBar } from "react-native-screens";


export const Colors = {
  primary: '#4B9CD3',
  accent: '#FFA500',
  background: ["#708090","#2F4F4F"],
  grey : "#B8A9A9"
};

export const DetailsStyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#87CEEB",
      padding: 8,
    },
    cityName: {
      fontSize: 28,
      fontWeight: "bold",
      alignSelf : "center",
      marginBottom : 5
    },
    temperature: {
      fontSize: 64,
      fontWeight: "bold",
    },
    weatherType: {
      fontSize: 20,
      fontWeight: "300",
    },
    windSpeed: {
      fontSize: 16,
      marginTop: 10,
    },
    forecastHeader: {
      fontSize: 20,
      fontWeight: "bold",
      marginTop: 20,
    },
    forecastItem: {
      backgroundColor: "#6D869C",
      padding: 15,
      borderRadius: 10,
      alignItems: "center",
      marginHorizontal: 5,
    },
    forecastDay: {
      fontSize: 16,
      color: "#fff",
    },
    forecastTemp: {
      fontSize: 20,
      color: "#fff",
    },
    forecastCondition: {
      fontSize: 14,
      color: "#fff",
    },
  });


  export const Homestyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#87CEEB",
      alignItems : "center",
      justifyContent : "space-evenly",
      padding: 20,
    },
    overlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)', // Optional: semi-transparent background
    },
    searchBar: {
      width : "100%",
      padding : 10,
      backgroundColor: '#AAADB0', 
      flexDirection : "row",
      marginBottom : 30,
      borderRadius: 30,          
      alignItems: 'center',      
      justifyContent: 'space-between',  
      alignSelf: 'center',       
    },
    searchBarText : {
      flex : 0.8
    },searchBarIcon : {
      flex : 1,
      alignSelf : "center",
      verticalAlign : "middle"
    },
    cityName: {
      fontSize: 28,
      fontWeight: "bold",
    },
    temperature: {
      fontSize: 64,
      fontWeight: "bold",
    },
    weatherType: {
      fontSize: 20,
      fontWeight: "300",
    },
    windSpeed: {
      fontSize: 16,
      marginTop: 10,
    },
    forecastHeader: {
      fontSize: 20,
      fontWeight: "bold",
      marginTop: 20,
    },
    forecastItem: {
      backgroundColor: "#6D869C",
      padding: 15,
      borderRadius: 10,
      alignItems: "center",
      marginHorizontal: 5,
    },
    forecastDay: {
      fontSize: 16,
      color: "#fff",
    },
    forecastTemp: {
      fontSize: 20,
      color: "#fff",
    },
    forecastCondition: {
      fontSize: 14,
      color: "#fff",
    },
  });

  export const ForecastcomponentStyles = StyleSheet.create({
    container : {
      padding : 16,
      alignItems : "center",
      justifyContent : "center",
      borderRadius : 16
    },
    image : {
      width : 32,
      height : 32,
      alignSelf : "center"
    },
    topText : {
      marginBottom : 32,
      alignSelf : "center",
      marginTop : 16,
      color : "#000000",
      fontSize : 24
    },
    conditionText : {
      marginBottom :8,
      textAlign : "center",
      fontSize : 16,
      color : Colors.grey
    },
    dayText : {
      marginBottom : 16,
      fontSize : 22,
      color : "#FFA500"
    }
  })


export const WeatherItemstyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    borderRadius: 16,
    margin: 8,
    width : "95%",
    height: 60, 
  },
  cityName: {
    fontSize: 18,
    color: '#D8D8D8', // Matches the light text color
  },
  icon: {
    width: 40,
    height: 40,
  },
});

export const WeatherCardstyles = StyleSheet.create({
  container: {
    width: '90%', // Adjust width based on screen size  
    borderRadius: 16,
    padding: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    justifyContent : "center",
    marginVertical: 10,
  },
  cityName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom : 86,
    color: '#000000',
  },
  temperature: {
    fontSize: 64,
    fontWeight: 'bold',
    marginBottom : 32,
    color: '#000000',
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent : "center"
  },
  icon: {
    width: 50,
    height: 50,
    borderRadius: 16,
    marginBottom: 8,
  },
  condition: {
    fontSize: 18,
    color: Colors.grey,
  },
});


export const OvalButtonstyles = StyleSheet.create({
  button: {
    backgroundColor: '#FFA500', // Orange color
    paddingVertical: 10,       // Vertical padding for the button
    paddingHorizontal: 20,     // Horizontal padding for the button
    borderRadius: 30,          // Fully rounded corners
    alignItems: 'center',      // Center the text horizontally
    justifyContent: 'center',  // Center the text vertically  
    marginBottom : 10     // Center the button itself
  },
  buttonText: {
    color: '#000',             // Black text color
    fontSize: 16,              // Font size for the text
    fontWeight: 'bold',        // Bold font weight
  },
});

export const topBarStyles = StyleSheet.create({
  container : {
    flexDirection : "row",
    width : "100%",
    backgroundColor : Colors.accent,
    padding : 8,
    alignItems : "center",
    justifyContent : "flex-start"
  },
  button : {
    width : 24,
    height : 24,
    color : "#000000"
  }
})

export const WeatherCardDetailsStyles = StyleSheet.create({
  container : {
    alignItems : "center",
    justifyContent : "center",
    borderRadius : 16,
    width : "80%",
    marginBottom : 24,
    alignSelf : "center",
    padding : 16
  },
  condition: {
    fontSize: 12,
    textAlign : "center",
    color: Colors.grey,
  },
  degreeText : {
    color : "#000000",
    fontSize : 57
  },windSpeedText : {
    color : Colors.grey,
    fontSize : 16
  },image : {
    width : 80,
    height : 80,
    alignSelf : "center",
    borderRadius: 16
  },topRow : {
    flexDirection : "row",
    marginBottom : 24,
    justifyContent : "space-between"}
})
  