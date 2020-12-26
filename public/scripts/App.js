var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
monthNames = ["January", "February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December"],
time = document.getElementById('time'),
year = document.getElementById('year');
setInterval(()=> {
today = new Date()
time.innerHTML =  monthNames[today.getMonth()] + ' ' + days[today.getDay()] + '  ' + today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds()
percentVal = `${percent()}%`
year.innerHTML = percentVal
document.title = `${percent()}%`
year.style.width = percentVal
}, 500);
function percent(){
    return Math.floor((((((today - new Date(new Date().getFullYear(), 0, 1)) / (1000 * 60 * 60 * 24)) * 100) / 365).toFixed(6)))
}
  