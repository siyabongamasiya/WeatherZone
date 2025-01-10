//http://api.weatherstack.com/current? access_key = 3b9aad148eb3527339c4e7231c8e9252& query = New York
import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';

const DEFAULT_KEY = "default location"

export class Repository {

    getCurrentWeather(location) {
        const apiKey = "";
        const baseUrl = "http://api.weatherstack.com/current";
    
        return new Promise((resolve, reject) => {
            axios.get(baseUrl, {
                params: {
                    access_key: apiKey,
                    query: location,
                },
            })
            .then(response => {
                // Check if the API responded with data
                if (response.data && response.data.current) {
                    resolve(response.data); 
                } else {
                    reject(new Error("Invalid response from API")); 
                }
            })
            .catch(error => {
                console.error("Error fetching weather data:", error.message);
                reject(error); // Reject the promise with the error
            });
        });
    }

    async saveLocation(location){
        //save location
        try{
            await AsyncStorage.setItem(DEFAULT_KEY,location)
        }catch(exception){

        }
        
    }

    async getDefaultLocation() {
        try {
            const storedValue = await AsyncStorage.getItem(DEFAULT_KEY);
            return storedValue && storedValue.trim() !== "" ? storedValue : "Durban";
        } catch (error) {
            console.error("Error fetching default location:", error);
            return "Durban"; 
        }
    }

    async reloadDefault(){
        //get default location
        try {
            const location = await AsyncStorage.getItem(DEFAULT_KEY)
            return this.getCurrentWeather(location)
        } catch (error) {
            
        }
        
    }
}