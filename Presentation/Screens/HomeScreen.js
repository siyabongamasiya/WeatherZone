import React, { useEffect, useState } from "react";
import { View, Text, ActivityIndicator,TextInput, FlatList, StyleSheet, TouchableOpacity, SafeAreaView } from "react-native";
import { Homestyles,Colors} from "../Styles";
import { WeatherCard,WeatherItem,CustomSearchBar,OvalButton} from "../Components/components";
import { Repository } from "../../Data/Repository/Repository";
const repository = new Repository()

export default function HomeScreen({ navigation }) {
  const [isLoading, setIsLoading] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [currentCity,setCurrentCity] = useState({name : "Durban",temp : 0,condition : "",image : "",speed : 0})

  const goToNextScreen = (location) => {
    navigation.navigate('Details', {location});
  };

  const loadCurrentLocationWeather = async () => {
    setIsLoading(true);
      loadCurrentLocationWeather()
    const response = await repository.getCurrentWeather(searchText)
    setCurrentCity({
      name : response.location.name,
      temp : response.current.temperature,
      condition : response.current.weather_descriptions[0],
      image : response.current.weather_icons[0],
      speed : response.current.wind_speed})
      setIsLoading(false);
      setSearchText("")
  }


  const reloadDefault = async() => {
    const defaultLoaction = await repository.getDefaultLocation()
         const response = await repository.getCurrentWeather(defaultLoaction)
         setCurrentCity({
             name : response.location.name,
             temp : response.current.temperature,
             condition : response.current.weather_descriptions[0],
             image : response.current.weather_icons[0],
             speed : response.current.wind_speed})
  }

  useEffect(() => {
     reloadDefault()
  },[])

  return (
    <SafeAreaView style={Homestyles.container}>
      <CustomSearchBar searchText = {searchText} setSearchText = {setSearchText} onSearchClick={loadCurrentLocationWeather}/>
      <WeatherCard location={currentCity} onclick={() => {goToNextScreen(currentCity)}}/>
      {isLoading && (
        <View style={Homestyles.overlay}>
          <ActivityIndicator size="large" color= {Colors.accent} />
        </View>
      )}
      <View style = {{width : "100%",flexDirection : "row" ,alignItems : "center",justifyContent : "space-between"}}>
          <OvalButton style = {{alignSelf : "flex-start"}} text= "Reload Default" onclick={reloadDefault}/>
          <OvalButton style = {{alignSelf : "flex-end"}} text= "Refresh" onclick={loadCurrentLocationWeather}/>
      </View>
      
    </SafeAreaView>
  );
}