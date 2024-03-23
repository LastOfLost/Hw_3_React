import style from "../style/new_categories.module.css";

export default function NewsCategorie({onClick}){

    return (
        <div className = {style.div_categories}>
            <button value={"sport"} onClick={onClick}>Sport</button>
            <button value={"it"} onClick={onClick}>IT</button>
            <button value={"gaming"} onClick={onClick}>Gaming</button>
            <button value={"economy"} onClick={onClick}>Economy</button>
            <button value={"travel"} onClick={onClick}>Travel</button>
            <button value={"health"} onClick={onClick}>Health</button>
            <button value={"learning"} onClick={onClick}>Learning</button>
        </div>
    );
};