import React from "react";
import { useAppContext } from "../../utils/AppProvider";
import s from "../../style/weather_style/weather.module.css";
import { formatDate } from "../../utils/formateDateTime";

const Forecast = (props) =>{
    const {forecastday} = props;
    const {updateWeatherIndex} = useAppContext();

    if(!forecastday){
        return null;
    }
    
    const onClickForecast = function(e){
        const currentForecastIndex = forecastday.findIndex((x) => {
            return x.date === e.currentTarget.id;
        });

        updateWeatherIndex(currentForecastIndex);
    }

    return(
        <div className={`${s.forecast_box} ${s.container} ${s.container_box}`}>
            <p className={s.forecast_title}>5 Days Forecast:</p>
            <div>{forecastday.map((x) => {
                return(
                    <div onClick={onClickForecast} 
                        className={s.forecast_item_box}
                        id={x.date}>
                        <img className={s.weather_icon} src={x.day.condition.icon} alt=""></img>
                        <p className={s.weather_temp}>{x.day.avgtemp_c}°C</p>
                        <p className={s.weather_date}>{formatDate(new Date(x.date),{ 
                            weekday: 'long',
                            month: 'long',
                            day: 'numeric',
                        })}</p>
                    </div>
                );
            })}</div>    
        </div>
    );
}

export default Forecast;

