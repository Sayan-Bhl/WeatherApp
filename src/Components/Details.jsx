import React, { useEffect,useContext , useState} from 'react'
import DailyDetails from './DailyDetails';
import HourlyDetails from './HourlyDetails';
import WeatherDetails from './WeatherDetails';
import WeatherContext from '../Contexts/WeatherContext';
import Alert from './Alert'
const Details = () => {
    const weatherContext = useContext(WeatherContext)
    const [timestamp, setTimestamp]=useState(new Date())
    const { weather,getWeather,error} = weatherContext

    useEffect(() => {
        setInterval(()=>{setTimestamp(new Date())},1000)
      if (sessionStorage.getItem("city")){
        getWeather(sessionStorage.getItem("city"))
      }else{
    
        getWeather('London')
      }
      // eslint-disable-next-line  
    },[])

  return (
    <div>
     
      {error!==null && <Alert color={"red"} error={error}/>}
      {
        weather!==undefined && 
        <><WeatherDetails weather={weather} timestamp={timestamp}/>
        <HourlyDetails weather={weather} timestamp={timestamp}/>
        <DailyDetails weather={weather}/>
        </>
      }
          
    </div>
  )
}

export default Details
