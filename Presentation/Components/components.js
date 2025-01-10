import React from "react";
import { View, Text,Image,TouchableOpacity ,TextInput} from "react-native";
import { topBarStyles,WeatherCardDetailsStyles,ForecastcomponentStyles,OvalButtonstyles ,WeatherItemstyles,WeatherCardstyles, Colors, Homestyles  } from "../Styles";
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';


export function Forecast({temp,imagestring,condition,day}){
    return(
        <LinearGradient
      colors= {Colors.background} // Gradient colors
      start={{ x: 0, y: 0 }} // Gradient start point
      style = {ForecastcomponentStyles.container}
      end={{ x: 0, y: 1 }}   // Gradient end point
    >
        <View >
            <Text style = {ForecastcomponentStyles.topText}>{temp}{"\u00B0"}</Text>
            <View>
                <Image style = {ForecastcomponentStyles.image} source={{ uri: 'https://img.icons8.com/color/48/000000/sun--v1.png' }}/>
                <Text style = {ForecastcomponentStyles.conditionText}>{condition}</Text>
                <Text style = {ForecastcomponentStyles.dayText}>{day}</Text>
            </View>
        </View>

    </LinearGradient>
        
    )
}

export function CustomSearchBar({ searchText, setSearchText, onSearchClick }) {
  return (
    <View style={Homestyles.searchBar}>
      <TextInput
        style = {Homestyles.searchBarText}
        placeholder="Search Area"
        value={searchText}
        onChangeText={setSearchText}
      />
      <TouchableOpacity onPress={onSearchClick} >
        <Icon name="search" size={24} color="#000"  style = {Homestyles.searchBarIcon}/>
      </TouchableOpacity>
    </View>
  );
}

export function WeatherItem({imagestring,place}) {
    return (
      <LinearGradient
        colors={['#708090', '#2F4F4F']} // Gradient colors for the background
        start={{ x: 0, y: 0 }} // Gradient start point
        end={{ x: 1, y: 0 }}   // Gradient end point
        style={WeatherItemstyles.container}
      >
        <Text style={WeatherItemstyles.cityName}>{place}</Text>
        <Image
          source={{ uri: 'https://img.icons8.com/color/48/000000/sun--v1.png' }} // Replace with a local or online image URL
          style={WeatherItemstyles.icon}
        />
      </LinearGradient>
    );
  }


export function WeatherCard({location,onclick}) {
    return (
      <LinearGradient
        colors={['#708090', '#2F4F4F']} // Gradient colors for the background
        start={{ x: 0, y: 0 }} // Gradient start point
        end={{ x: 0, y: 1 }}   // Gradient end point
        style={WeatherCardstyles.container}
      >
        <TouchableOpacity onPress={() => {onclick()}}>
        <Text style={WeatherCardstyles.cityName}>{location.name}</Text>
        
        <View style={WeatherCardstyles.iconContainer}>
        <Text style={WeatherCardstyles.temperature}>{location.temp}{"\u00B0"}</Text>
          <Image
            source={{ uri: location.image }} // Replace with a local or online image URL
            style={WeatherCardstyles.icon}
          />
          <Text style={WeatherCardstyles.condition}>{location.condition}</Text>
        </View>
        </TouchableOpacity>
        
      </LinearGradient>
    );
  }

  export function OvalButton({text,style,onclick}) {
    return (
      <TouchableOpacity onPress={onclick} style={[OvalButtonstyles.button,style]}>
        <Text style={OvalButtonstyles.buttonText}>{text}</Text>
      </TouchableOpacity>
    );
  }

  export function TopBar(){
    return(
        <View style = {topBarStyles.container}>
            <TouchableOpacity>
                <Icon name="arrow-back" size={24} color="black" />
           </TouchableOpacity>
        </View>
    )
  }

  export function WeatherCardDetails({location}){
    return(
        <LinearGradient
        colors={['#708090', '#2F4F4F']} // Gradient colors for the background
        start={{ x: 0, y: 0 }} // Gradient start point
        end={{ x: 0, y: 1 }}   // Gradient end point
      >

        <View style = {WeatherCardDetailsStyles.container}>
            <View style = {WeatherCardDetailsStyles.topRow}>
                <Text style = {WeatherCardDetailsStyles.degreeText}>{location.temp}{"\u00B0"}</Text>
                <View>
                    <Image
                        source={{ uri: location.image }} 
                        style={WeatherCardDetailsStyles.image}
                   />
                   <Text style = {WeatherCardDetailsStyles.condition} multiline={true}>{location.condition} </Text>
                </View>
                
            </View>
            <Text style = {WeatherCardDetailsStyles.windSpeedText}>{`Wind Speed : ${location.speed}KM/H`}</Text>
        </View>

      </LinearGradient>
        
    )
  }