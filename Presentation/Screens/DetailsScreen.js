import React from "react";
import { View, Text, StyleSheet, FlatList, SafeAreaView } from "react-native";
import { DetailsStyles } from "../Styles";
import { Forecast, OvalButton, WeatherCardDetails } from "../Components/components";
import { Repository } from "../../Data/Repository/Repository";
const repository = new Repository()

const forecastData = [
  {
    temp: 28,
    imagestring: "../../Designs/sunny.png", // Adjust path as needed
    condition: "Sunny",
    day: "Monday",
  },
  {
    temp: 25,
    imagestring: "../../Designs/cloudy.png",
    condition: "Cloudy",
    day: "Tuesday",
  },
  {
    temp: 18,
    imagestring: "../../Designs/rainy.png",
    condition: "Rainy",
    day: "Wednesday",
  },
  {
    temp: 22,
    imagestring: "../../Designs/windy.png",
    condition: "Windy",
    day: "Thursday",
  },
  {
    temp: 30,
    imagestring: "../../Designs/sunny.png",
    condition: "Sunny",
    day: "Friday",
  },
  {
    temp: 27,
    imagestring: "../../Designs/cloudy.png",
    condition: "Cloudy",
    day: "Saturday",
  },
  {
    temp: 20,
    imagestring: "../../Designs/rainy.png",
    condition: "Rainy",
    day: "Sunday",
  },
];

export default function DetailsScreen({ route }) {
  const { location } = route.params;
  const makeDefault = async () => {
    await repository.saveLocation(location)
    console.log(`saved ${location.name}`)
  }

  return (
    <SafeAreaView style={DetailsStyles.container}>
      <Text style = {DetailsStyles.cityName}>{location.name}</Text>
      <OvalButton style = {{alignSelf: "flex-end"}} text= "Make Default" onclick={makeDefault}/>
      <WeatherCardDetails location={location}/>
      <Text style = {DetailsStyles.forecastHeader}>7-Day Forecast</Text>
      <FlatList
        data={forecastData}
        style = {{padding : 2}}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => 
          (<Forecast temp={item.temp} 
            imagestring={item.imagestring} 
            day={item.day}
            condition={item.condition}/>)}
        horizontal
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={{ width: 10 }} />}
      />
    </SafeAreaView>
  );
}

