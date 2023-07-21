import React from 'react'

import Daily from './Daily'
const DailyDetails = (props) => {
  const getContent = () => {
    let content = []
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    
    
    for (let i = 1; i < 7; i++) {
      let d = new Date(props.weather.forecast.forecastday[i].date);
      let day = days[d.getDay()];
      content.push(<Daily key={day} weather={props.weather.forecast.forecastday[i]} day={day}/>);
    }
    return content
  }
  return (
    <div className='flex flex-wrap gap-4 mx-5 my-5 justify-center'>
       {getContent()} 
    </div>
  )
}

export default DailyDetails
