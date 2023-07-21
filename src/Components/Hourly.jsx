import React from 'react'

const Hourly = (props) => {
  let d = props.weather.time.split(' ')[1].split(':')[0];
  return (
    <div className='flex flex-col justify-left p-2 rounded-lg '>
      <p className='mb-2'>{props.weather.temp_c}<sup>o</sup>c</p>
      <img src={props.weather.condition.icon} alt="" className='w-9 h-9' />
      <p>{props.weather.chance_of_rain}%</p>
      <p className=' mt-3 mx-auto'>{(d === '00' || d === '12') ? 12 : (d % 12)}{d <= 12 ?'AM':'PM'}</p>
    </div>
  )
}

export default Hourly
