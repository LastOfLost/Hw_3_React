import React from "react";
import { useAppContext } from "../../utils/AppProvider";
import { formatDate, formatTime } from "../../utils/formateDateTime";
import s from "../../style/weather_style/weather.module.css";

const DateLocation = (props) =>{
    const {location} = props;

    if(!location || !location.localtime){
        return null;
    }

    const localDateTime = new Date(location.localtime);
    
    return(
        <div className={`${s.date_box} ${s.container} ${s.container_box}`}>
                <p className={s.cityName}>{location.name}</p>
                <p className={s.time}>{formatTime(localDateTime, {    
                    hour: 'numeric',
                    minute: '2-digit',
                })}
                </p>
                <p className={s.date}>{formatDate(localDateTime, { 
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                })}
                </p>
        </div>
    );
}

export default DateLocation;