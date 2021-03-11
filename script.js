// JavaScript
function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

let a;
let date;
let time;
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

setInterval(() => {
    a = new Date();
    date = a.toLocaleDateString(undefined, options);
    let h = a.getHours() < 10 ? '0' : '';
    let m = a.getMinutes() < 10 ? '0' : '';
    let s = a.getSeconds() < 10 ? '0' : '';
    time = h + a.getHours() + ':' + m + a.getMinutes() + ':' + s + a.getSeconds();
    document.getElementById('time').innerHTML = time + ' <br>on ' + date;
}, 1000);