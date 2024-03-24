import React, { useEffect, useState } from 'react'
import { useAppContext } from '../utils/AppProvider';
import { FormControlLabel } from '@mui/material';
import MySwitch from "../components/MySwitch"
import s from "../style/weather_style/weather.module.css"
import { WEATHER_PROFILE } from '../utils/api_profile';

import DateLocation from '../components/weather/DateLocation';
import CurrentForecast from '../components/weather/CurrentForecast';
import Forecast from '../components/weather/Forecast';
import HourlyForecast from '../components/weather/HourlyForecast';

export default function Weather() {
  const [inputValue, inputUpdate] = useState("");
  // const [inputValue, inputUpdate] = useState("");
  const {dataWeather, updateWeather,
         isDarkMode, toogleThemeMode} = useAppContext();

  const fetchData = async () => {    
      let result = false;
      try {      
        result = await updateWeather(
            inputValue,
            WEATHER_PROFILE.forecastPath,
            '&aqi=no&days=5',
          );

      } catch (error) {      
          console.error(error);    
      }  

      return result;
  };  

  const onFormSubmit = async (e) =>{
    e.preventDefault();

    const result = await fetchData();

    const search_form = document.getElementById('search_form');
    
    if(result === false){
      search_form.classList.remove(s.successfully);
      search_form.classList.remove(s.error);
      setTimeout(() => {
        search_form.classList.add(s.error);
      }, 1);
    }
    else if(result === true){
      setTimeout(() => {
        if(!search_form.classList.contains(s.successfully)){
          search_form.classList.add(s.successfully);
        }
      }, 1);
    }

  }

  const onInputChange = (e) =>{
    inputUpdate(e.target.value);

    const search_form = document.getElementById('search_form');
    search_form.classList.remove(s.error);
    search_form.classList.remove(s.successfully);
  }

  const onSwitchChange = () =>{
    toogleThemeMode();
  }

  useEffect(() => {
    fetchData();
  },[])
  

  return (
    <div className={s.weather_area}>
      <div className={s.main_container}>
        <div className={`${s.row_container} ${s.weather_header}`}>
          <div className={s.theme_box}>
            <FormControlLabel onChange={onSwitchChange}
              control={<MySwitch sx={{ m: 1 }} defaultChecked/>}
            />
            
            <p className={s.theme_mode}>{isDarkMode ? 'Dark Mode' : 'Light Mode'}</p>
          </div>

          <form onSubmit={onFormSubmit} className={s.search_area} id="search_form">
            <input 
              className={s.search_input}
              type='text'
              onChange={onInputChange}>
            </input>

            <button className={s.search_button}>
                  <svg width="24" height="24"
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                  className={s.icon}>
                      <path  d="M10 2.75a7.25 7.25 0 015.63 11.82l4.9 4.9a.75.75 0 01-.98 1.13l-.08-.07-4.9-4.9A7.25 7.25 0 1110 2.75zm0 1.5a5.75 5.75 0 100 11.5 5.75 5.75 0 000-11.5z"
                      ></path>
                  </svg>
            </button>
          </form>
        </div>

        <div className={s.weather_box}>
          <div className={s.row_container} style={{gap: 60}}>
            <DateLocation location={dataWeather.location}></DateLocation>
            <CurrentForecast forecastday={dataWeather.forecast?.forecastday}></CurrentForecast>
          </div>

          <div className={s.row_container} style={{gap: 50}}>
            <Forecast forecastday ={dataWeather.forecast?.forecastday}></Forecast>
            <HourlyForecast forecastday ={dataWeather.forecast?.forecastday}></HourlyForecast>
          </div>
        </div>
      </div>
    </div>
  );
}
