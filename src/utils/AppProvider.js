import { createContext , useState } from "react";
import { API_PROFILE } from "./api_profile";

export const AppContext = createContext();

export function AppProvider({children}) {
    const [dataNews, dataSet] = useState([]);

    const dataUpdate = async function(searchValue){

        if(typeof searchValue === undefined || searchValue === "") searchValue = "ukraine";
        
        try{
            const httpQueqy = `${API_PROFILE.apiUrl}${API_PROFILE.newsPath}${API_PROFILE.apiKey}&q=${searchValue}&pageSize=15`;
            const responce = await fetch(httpQueqy);

            const data = await responce.json();

            dataSet(data);
            return data;

        } catch(error){
            console.error(error);
        }
    };

    return(
        <AppContext.Provider value={{dataNews, dataUpdate}}>
            {children}
        </AppContext.Provider>
    );

}