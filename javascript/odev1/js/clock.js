var name1 = prompt("Adınızı Giriniz","");

var yourName = document.getElementById("myName");
var clock = document.getElementById("myClock");

yourName.innerHTML = (name1.charAt(0).toUpperCase()) + (name1.slice(1));

let Days = [
    "Pazar",
    "Pazartesi",
    "Salı",
    "Çarşamba",
    "Perşembe",
    "Cuma",
    "Cumartesi",
  ];
 
  let Months = [
    "Ocak",
    "Şubat",
    "Mart",
    "Nisan",
    "Mayıs",
    "Haziran",
    "Temmuz",
    "Ağustos",
    "Eylül",
    "Ekim",
    "Kasım",
    "Aralık",
  ];
  function showTime() {
    const todayTime = new Date();
    let hours = todayTime.getHours();
    let minutes = todayTime.getMinutes();
    let seconds = todayTime.getSeconds();
    let day = Days[todayTime.getDay()]; 
    let date = todayTime.getDate();
    let month = Months[todayTime.getMonth()];
    let year = todayTime.getFullYear();
  
    clock.innerHTML =
      hours +
      ":" +
      minutes +
      ":" +
      seconds +
      " " +
      day +
      " " +
      date +
      " " +
      month +
      " " +
      year;
    setTimeout(showTime, 1000);
  }
  
  showTime();



