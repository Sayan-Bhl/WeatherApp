import React, { useState } from "react"
import WeatherContext from "./WeatherContext"
const WeatherState = (props) => {
    const WEATHER_API_KEY = process.env.REACT_APP_API_KEY;
    const [weather, setWeather] = useState()
    const[error, setError]=useState(null)
    const [showAlert, setShowAlert] = useState(true);
    const getWeather = (city) => {
            fetch(`http://api.weatherapi.com/v1/forecast.json?key=${WEATHER_API_KEY}&q=${city}&days=7&aqi=no&alerts=no`)
            .then((response)=>{
                if (!response.ok) {
                    throw new Error("City weather data doesn't exist");
                }
                return response.json()
            })
            .then((data)=>{
                setWeather(data)
            })
            .catch((error)=>{
                setShowAlert(true)
                setError(error.message)
            })
    }

    return (
        <WeatherContext.Provider value={{ weather, getWeather,error,showAlert,setShowAlert }}>
            {props.children}
        </WeatherContext.Provider>
    )
}
export default WeatherState;