import React, { useEffect, useState, useContext } from 'react'
import WeatherContext from '../Contexts/WeatherContext';
const Navbar = () => {
    const [loc, setLoc] = useState("");
    const [lat, setLat] = useState('')
    const [lon, setLon] = useState('')
    const context = useContext(WeatherContext);
    const { getWeather } = context;
    const handleChange = (e) => {
        e.preventDefault();
        setLoc(e.target.value);
    }
    const handleClick1 = (e) => {
        e.preventDefault()
        sessionStorage.setItem("city", loc);
        getWeather(loc);
    }
    useEffect(()=>{
        navigator.geolocation.getCurrentPosition((position) => {
            setLat(position.coords.latitude);
            setLon(position.coords.longitude);
        })
    })
    const handleClick2=async(e)=>{
        e.preventDefault()
        sessionStorage.setItem("city", lat + ',' + lon);
        getWeather(lat + ',' + lon)
        
    }
    return (

        <div className="flex flex-col md:flex-row justify-center gap-x-8 gap-y-3 md:gap-y-0 p-3 backdrop-blur-sm bg-white/30" >
            <div className="relative flex items-center text-gray-400 bg-transparent" >
                <input onChange={handleChange} type="text" className="bg-white w-80 px-4 py-1.5 font-semibold placeholer-gray-500 text-black border-none rounded-full w-full md:w-fit focus:outline-gray-500" placeholder="Search" />
                <svg onClick={handleClick1} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black " className="w-9 h-9 absolute right-1 bg-transparent fill-black active:fill-gray-500">
                    <path d="M8.25 10.875a2.625 2.625 0 115.25 0 2.625 2.625 0 01-5.25 0z" />
                    <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.125 4.5a4.125 4.125 0 102.338 7.524l2.007 2.006a.75.75 0 101.06-1.06l-2.006-2.007a4.125 4.125 0 00-3.399-6.463z" clipRule="evenodd" />
                </svg>
            </div>

            <div onClick={handleClick2} className="flex justify-center bg-black active:bg-gray-500 px-3 rounded-full" >
                <span className='py-1.5 bg-transparent'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-6 h-6 bg-transparent ">
                        <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                    </svg>
                </span>

                <p className='bg-transparent px-2 py-1.5 text-white'>Current Location</p>
            </div>
        </div>

    )
}

export default Navbar
