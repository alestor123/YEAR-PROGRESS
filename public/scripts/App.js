var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
monthNames = ["January", "February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December"],
time = document.getElementById('time'),
year = document.getElementById('year');
setInterval(()=> {
var today = new Date()
time.innerHTML =  monthNames[today.getMonth()] + ' ' + days[today.getDay()] + '  ' + today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds()
}, 500);
