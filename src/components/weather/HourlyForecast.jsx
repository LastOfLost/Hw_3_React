import React from "react";
import { useAppContext } from "../../utils/AppProvider";
import s from "../../style/weather_style/weather.module.css";
import { Select } from "@mui/material";
import { formatTime } from "../../utils/formateDateTime";
import nav_icon from "../../img/universal/navigation.png";

const HourlyForecast = (props) =>{

    const {weatherIndex, isDarkMode} = useAppContext();
    const {hourlyForecast} = props;

    if(!hourlyForecast){
        return;
    }

    const currentForecast = hourlyForecast[weatherIndex].hour;

    const isNightTime = (time) => {

        const date = time.split(' ');
        
        const _time= new Date(time);
        const startTime = new Date(`${date[0]} 06:00`);
        const endTime = new Date(`${date[0]} 17:00`);

        if(startTime > _time || _time > endTime){
            return true;
        }

        return false;
    };

    const setItemBackground = (time) => {
        
        if(!time) return null;

        if(isDarkMode === undefined || isDarkMode === true) return null;

        return {
            background: isNightTime(time) ? 'var(--weather-night-gradient-1)' : 'var(--weather-day-gradient-1)'
        };
    };

    return(
        <div className={`${s.container_box} ${s.hourly_box}`}>
            <p className={s.hourly_title}>Hourly Forecast:</p>
            <div className={s.hourly_list}>
                    
                {currentForecast.map((x) => {
                    return(
                        <div className={s.hourly_item_box}
                        style={setItemBackground(x.time)}>
                            <p className={s.hourly_time}>{formatTime(new Date(x.time))}</p>
                            <img className={s.hourly_icon} alt="" src={x.condition.icon.replace("64x64", "128x128")}></img>
                            <p className={s.hourly_info}>{x.heatindex_c}°C</p>
                            <img style={{rotate: `${x.wind_degree}deg`}} className={s.wind_icon} alt="" src={nav_icon}></img>
                            <p className={s.hourly_info}>{x.wind_kph} km/h</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default HourlyForecast;