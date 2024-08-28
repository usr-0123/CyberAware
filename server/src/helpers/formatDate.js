export const formatDate = (time) => {

    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    const dayOfWeek = daysOfWeek[time.getDay()];
    const day = String(time.getDate()).padStart(2, '0');
    const month = months[time.getMonth()];
    const year = time.getFullYear();

    const hours = String(time.getHours()).padStart(2, '0');
    const minutes = String(time.getMinutes()).padStart(2, '0');
    const seconds = String(time.getSeconds()).padStart(2, '0');
    const milliSeconds = String(time.getMilliseconds()).padStart(2, '0');

    const formattedTime = { dayOfWeek, day, month, year, hours, minutes, seconds, milliSeconds }

    return formattedTime;
}