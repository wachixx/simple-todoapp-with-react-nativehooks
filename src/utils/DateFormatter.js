
export const DateFormatter = (date) => {
    var dayOfWeekArray=['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Sarturday'];
    var formattedDate =  date.getDate() + '-' + (date.getMonth() + 1) + '-' + date.getFullYear();
    var formatObject = { 
        dayOfWeek: dayOfWeekArray[date.getDay()],
        formattedDate: formattedDate
    }
    return formatObject;
}