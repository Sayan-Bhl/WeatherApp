import React from 'react'

const Daily = (props) => {
    
  return (
  
      <div className='text-left font-bold  backdrop-blur-md bg-white/30 p-3 rounded-lg w-full md:w-52 '>
          <p className='mb-3'>{props.day}</p>
          <div className='flex flex-col justify-around gap-3'>
          <div className=' flex flex-row justify-around'>
                  <p className="text-lg my-auto">{props.weather.day.maxtemp_c}<sup>o</sup>c</p>
                  <p className="text-lg my-auto">{props.weather.day.mintemp_c}<sup>o</sup>c</p>
          </div>
              
              <div className='flex flex-col'>
                    <div className='flex flex-row mx-auto'>
                    <img src={props.weather.day.condition.icon} alt="" className='w-10 h-10'/>
                  <p>{props.weather.day.daily_chance_of_rain}%</p>
                  </div>
                  <p className="text-sm text-center">{props.weather.day.condition.text}</p>
              </div>
              
          </div>
          
          
      </div>
 
  )
}

export default Daily
