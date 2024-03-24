import React, { useEffect, useState } from "react";
import { useAppContext } from "../utils/AppProvider";
import style from "../style/new.module.css"
import NewsCategorie from "../components/NewsCategories";
import { NavLink } from "react-router-dom";

const News = () => {  
    const {dataNews, updateNews} = useAppContext();
    const [inputValue, inputUpdate] = useState("");
    //   console.log(newsData);  

    const fetchData = async () => {    
        try {      
            await updateNews(inputValue);
        } catch (error) {      
            console.error(error);    
        }  
    };  

    const onClickCategories = (event) => {
        inputUpdate(event.target.value);
        fetchData();
    };

    const handleInputChange = (event) => {
        inputUpdate(event.target.value)
    };

    const handlerOnSubmit = (event) => {
        event.preventDefault();
        fetchData();
    };
    

    useEffect(() => {    
        fetchData();  
    }, []);  
    
    return (    

    <div className={style.div_general}>      
        <h1>Top news for you</h1> 

        <form onSubmit={handlerOnSubmit}>
        <div className={style.div_input}>
            <input type="text" 
            placeholder="Search the news"
            onChange={handleInputChange}
            value={inputValue}>
            </input>

            <button>
                <svg width="24" height="24"
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
                className={style.icon}>
                    <path  d="M10 2.75a7.25 7.25 0 015.63 11.82l4.9 4.9a.75.75 0 01-.98 1.13l-.08-.07-4.9-4.9A7.25 7.25 0 1110 2.75zm0 1.5a5.75 5.75 0 100 11.5 5.75 5.75 0 000-11.5z"
                    ></path>
                </svg>
            </button>
        </div>
        </form>
        
        <div className={style.div_news_border}>

        <div className={style.div_news_categorie}>
            <NewsCategorie onClick={onClickCategories}/>  
        </div>

        <div className={style.div_news}>
            {dataNews.articles?.map((newsItem) => {          
                return (            
                <NavLink to={newsItem.url}>
                <div className={style.div_news_item}>      
                <div className={style.div_news_item_image}>
                    <img src={newsItem.urlToImage} alt="" />  
                    </div>              
                    
                    <div className={style.div_news_item_description}>
                        <h2>{newsItem.title}</h2>              
                        {/* <p>{newsItem.description}</p>         */}
                    </div>          
                </div>      
                </NavLink>    
                );        
            })}
        </div>    
    </div>  
    </div>
    );
};

export default News;