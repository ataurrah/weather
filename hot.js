const api_key=`7a29d27b3d43d66a90478bfd08427d4b`;
const searchTemperature =() =>{
    const city =document.getElementById('city-name').value;
const url =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`;
console.log(url);

fetch(url)
.then(res =>res.json())
.then(data =>displayTremperature(data));
}

const setInnerText =(id,text) =>{
    document.getElementById(id).innerText=text;
}
const displayTremperature=temperature =>{
setInnerText('city',temperature.name);
setInnerText('temperature',temperature.main.temp);
setInnerText('condition',temperature.weather[0].main);

//set icon
const url =`https://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png `;
const imgIcon =document.getElementById('weather-icon');
imgIcon.setAttribute('src',url);
};
