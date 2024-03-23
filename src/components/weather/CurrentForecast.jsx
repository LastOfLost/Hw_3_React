import React from "react";
import { useAppContext } from "../../utils/AppProvider";
import s from "../../style/weather_style/weather.module.css";
import { lightTheme, darkTheme } from "../../utils/theme_images";

const CurrentForecast = (props) =>{

    const {isDarkMode} = useAppContext();

    const {forecastday} = props;

    if(!forecastday){
        return null;
    }

    const useTheme = isDarkMode ? darkTheme : lightTheme;
    
    const selectDay = forecastday[0];
    const thisHour = new Date().getHours();
    const selectHout = selectDay.hour[thisHour];
    
    return(
        <div className={`${s.container_box} ${s.current_box} ${s.row_container}`}>
            <div className={s.main_detalis}>
                <p className={s.current_temp}>{selectHout.temp_c}°C</p>

                <div className={s.row_container}>
                    <p className={s.feels_like_text}>Fells like:</p>
                    <p className={s.current_like_temp}>{selectHout.feelslike_c}°C</p>
                </div>

                <div className={`${s.sunrise_box} ${s.row_container}`} style={{gap: "10px"}}>
                    <img className={s.sun_icon} alt="" src={useTheme.sunrise}></img>
                    <div>
                        <p className={s.sun_title}>Sunrise</p>
                        <p className={s.sun_time}>{selectDay.astro.sunrise}</p>
                    </div>
                </div>

                <div className={`${s.sunset_box} ${s.row_container}`} style={{gap: "10px"}}>
                    <img className={s.sun_icon} alt="" src={useTheme.sunset}></img>
                    <div>
                        <p className={s.sun_title}>Sunset</p>
                        <p className={s.sun_time}>{selectDay.astro.sunset}</p>
                    </div>
                </div>
            </div>
            
            <div className={s.icon_and_title}>
                <img className={s.general_icon} alt="" src={selectHout.condition.icon.replace('64x64', '128x128')}></img>
                <p className={s.general_title}>{selectHout.condition.text}</p>
            </div>
            
            <div className={s.extra_detalis}>
                <div className={s.extra_item_box}>
                    <img className={s.extra_icon} alt="" src={useTheme.humidity}></img>
                    <p className={s.extra_info}>{selectHout.humidity}</p>
                    <p className={s.extra_title}>Humidity</p>
                </div>
                
                <div className={s.extra_item_box}>
                    <img className={s.extra_icon} alt="" src={useTheme.wind}></img>
                    <p className={s.extra_info}>{selectHout.wind_kph}km/h</p>
                    <p className={s.extra_title}>Wind</p>
                </div>
                
                <div className={s.extra_item_box}>
                    <img className={s.extra_icon} alt="" src={useTheme.pressure}></img>
                    <p className={s.extra_info}>{selectHout.pressure_mb}</p>
                    <p className={s.extra_title}>Pressure</p>
                </div>
                
                <div className={s.extra_item_box}>
                    <img className={s.extra_icon} alt="" src={useTheme.uv}></img>
                    <p className={s.extra_info}>{selectHout.uv}</p>
                    <p className={s.extra_title}>UV</p>
                </div>
            </div>
        </div>
    );
}

export default CurrentForecast;