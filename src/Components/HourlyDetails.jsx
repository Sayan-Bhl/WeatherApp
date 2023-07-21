import React from 'react'
import Hourly from './Hourly'
import './HourlyDetails.css'

const HourlyDetails = (props) => {
    
    const { weather ,timestamp} = props
    const getContent = () => {
        let content = []
        for (let i = timestamp.getHours()+1; i < 24; i++) {
            content.push(<Hourly key={weather.forecast.forecastday[0].hour[i].time_epoch} weather={weather.forecast.forecastday[0].hour[i]}/>);
        }
        for (let i = 0; i < timestamp.getHours(); i++) {
            content.push(<Hourly key={weather.forecast.forecastday[1].hour[i].time_epoch} weather={weather.forecast.forecastday[1].hour[i]}/>);
        }
        return content
    }
    return (
        
        <div className='flex flex-row font-xs overflow-x-scroll scrollbar text-white text-sm gap-x-5 mx-5 bg-sky-500/70 rounded-lg'>
            {getContent()}
      
        </div>
    )
}

export default HourlyDetails
