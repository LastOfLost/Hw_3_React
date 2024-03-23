
export function formatTime(date, option){
    const setOptions = option || {    
        hour: 'numeric',
        minute: '2-digit',
    };

    return date.toLocaleTimeString(undefined, setOptions);
}

export function formatDate(date, option){
    return date.toLocaleDateString("en-EN", option);
}