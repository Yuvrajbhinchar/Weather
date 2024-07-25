import { useState } from "react";
import { WeatherSvg } from "weather-icons-animated";
function Weather(){
  const api_key = "deb56c7b018d04081faa707eb8c68ac6"
  const [WeatherData, setWeatherData] = useState("")
  const [weather,setWeather] = useState("")
  function searchWeather(){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${WeatherData}&appid=${api_key}&units=metric`).then((res)=>{
      return res.json()
      }).then((data)=>{
        console.log(data)
        setWeather(data)
      })
  }
    return(
        <>
        {/* Main Screen */}
        <div className="w-screen h-screen items-center bg-cover bg-no-repeat justify-center flex bg-Thundercloud">
        {/* Main Div */}
        <div className="w-3/5 h-4/5 rounded-lg md:flex">
            {/* Left Panel */}
           <div className="w-1/2 bg-left h-full bg-cover bg-no-repeat rounded-l-lg flex flex-col justify-between bg-[#fbfafa49] ">
            {/* 1 */}
            <div className="flex justify-end m-4">
                <p className="font-bold text-white text-2xl">{weather.name}  {weather.sys && weather.sys.country}</p>
            </div>
            {/* 2 */}
            <div className="flex justify-center items-center"><img  src={`https://openweathermap.org/img/wn/${weather.weather && weather.weather[0].icon}@2x.png`} alt={"https://www.popsci.com/wp-content/uploads/2018/12/10/QKOPUFKJMVV7JE2YNBCV2FILFQ.jpg"} className="rounded-full h-4/5 bg-[#ffffff85]" /></div>
            {/* 3 */}
            <div className="flex justify-between items-end m-4">
                <div className="font-bold text-xl text-gray-200">
                    <p>{weather.coord && weather.coord.lat}</p>
                    <p>{weather.coord && weather.coord.lon}</p>
                </div>
                <div className="font-bold text-2xl text-gray-200"><p>{weather.main && weather.main.temp}°C</p></div>
            </div>
            </div>
            {/* Right Panel */}
            <div className="w-1/2 h-full bg-[#000000b8;] ">            
            <div className="h-1/5 flex justify-center items-center border-b border-gray-300 m-4"><WeatherSvg state="sunny" width={100} height={100}></WeatherSvg></div>
            <div className="flex border border-gray-200 rounded-lg w-3/5 mx-auto"><input type="search" placeholder="Search By Only City" className="bg-transparent  text-white placeholder-white border-none outline-none px-8 py-2" value={WeatherData} onChange={(e)=>{setWeatherData(e.target.value)} }/>
                <span
                  className="material-symbols-outlined text-2xl cursor-pointer text-white 
                 rounded-full p-1 float-right " onClick={searchWeather}
                >
                  search
                </span>
            </div>
            <div className="text-center text-white font-semibold my-5">
                <p>{weather.name} {weather.sys && weather.sys.country}</p>
                <p>{weather.weather && weather.weather[0].description}</p>
              </div>
              <div className="flex justify-around font-bold text-white border-b border-gray-300 m-6 p-2">
                  <p>Temp</p>
                  <p>{weather.main && weather.main.temp}°C</p>
                </div>
                <div className="flex justify-around font-bold text-white border-b border-gray-300 m-6 p-2">
                  <p>Visibility</p>
                  <p>{weather.visibility}Km</p>
                </div>
                <div className="flex justify-around font-bold text-white border-b border-gray-300 m-6 p-2">
                  <p>Wind Speed</p>
                  <p>{weather.wind && weather.wind.speed} meter/sec</p>
                </div>
            </div>
            </div>
        </div>
        </>
    );
}
export default Weather;