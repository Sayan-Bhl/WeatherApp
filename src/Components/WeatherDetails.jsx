import React from 'react'

const WeatherDetails = (props) => {
  const { weather,timestamp } = props
  

  return (
    <div className="flex flex-wrap flex-col mx-5 my-5  p-5 text-black font-bold backdrop-blur-sm bg-white/30 rounded-lg">
      <div className='flex flex-col'>
        <p className="text-left">{timestamp.toDateString()}, {timestamp.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })}</p>
        <p className="text-left">{weather.location.name},{weather.location.region},{weather.location.country}</p>
        <p className="text-left">Current weather</p>
      </div>

      <div className='flex flex-col md:flex-row mt-5'>
        <div className='flex flex-row md:justify-around justify-between w-full md:w-1/2 my-auto'>
          <div className='flex flex-col '>
            <p className="text-5xl">{weather.current.temp_c}<sup>o</sup>c</p>
            <p className="text-md mt-4">Feels like {weather.current.feelslike_c}<sup>o</sup>C</p>
          </div>
          <div className='flex flex-col my-auto'>
            <img src={weather.current.condition.icon} alt="" className='w-18 h-18 mx-auto'/>
            <p>{weather.current.condition.text}</p>
          </div>
        </div>
        <div className='flex justify-center text-left md:my-auto mt-5 flex-row gap-x-10 w-full md:w-1/2'>
          <div>
            <p>Humidity</p>
            <p>Wind</p>
            <p>Pressure</p>
            <p>UV Index</p>
            <p>Visibility</p>
          </div>
          <div>
            <p>{weather.current.humidity}%</p>
            <p>{weather.current.wind_kph} kph</p>
            <p>{weather.current.pressure_mb} mBr</p>
            <p>{weather.current.uv}</p>
            <p>{weather.current.vis_km} km</p>
          </div>
          
        </div>
      </div>


    </div>
  )
}

export default WeatherDetails
