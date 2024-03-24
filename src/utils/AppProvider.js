import { createContext , useContext, useState } from "react";
import { NEWS_PROFILE, WEATHER_PROFILE } from "./api_profile";

const AppContext = createContext();

export function useAppContext(){
    return useContext(AppContext);
}

export function AppProvider({children}) {
    const [dataNews, local_updateNews] = useState([]);
    const [dataWeather, local_updateWeather] = useState([]);
    const [indexWeather, local_updateIndex] = useState(0);
    const [isDarkMode, local_changeThemeMode] = useState(false);


    const updateNews = async function(...values){

        const searchValue = values[0] || "ukraine";
        
        try{
            const httpQueqy = `${NEWS_PROFILE.apiUrl}${NEWS_PROFILE.newsPath}${NEWS_PROFILE.apiKey}&q=${searchValue}&pageSize=15`;
            const responce = await fetch(httpQueqy);

            const data = await responce.json();

            local_updateNews(data);
            return data;

        } catch(error){
            console.error(error);
        }
    };

    const updateWeather = async function(...values){

        const searchValue = values[0] || "auto:ip";
        
        try{
            
            const httpQueqy = `${WEATHER_PROFILE.apiUrl}${values[1]}${WEATHER_PROFILE.apiKey}&q=${searchValue}${values[2]}`;
            const responce = await fetch(httpQueqy);

            const data = await responce.json();

            if(data.hasOwnProperty('error')){
                return false;
            }

            local_updateWeather(data);
            return true;

        } catch(error){
            console.error(error);
        }
    };

    const toogleThemeMode = function(){
        local_changeThemeMode(!isDarkMode);
    }

    const updateIndex = function(...values){
        local_updateIndex(values[0]);
    }
    
    return(
        <AppContext.Provider value={{
            dataNews, updateNews,
            dataWeather, updateWeather,
            indexWeather, updateIndex,
            isDarkMode, toogleThemeMode,
            }}>
            {children}
        </AppContext.Provider>
    );

}