const key = `8d7477aa3ae764cba895aaad0932e3a7`;
const url = `https://api.openweathermap.org/data/2.5/weather?units=metric&appid=${key}&q=${city}`;  // The url or json file


fetch( url ).then( response => {
    response.json().then( data => {
        console.log(data);
        $`content`.innerHTML =
        <li>Country:{data.name}</li>,
        <li>longitude: {data.lon}</li>,
        <li>latitude: {data.lat}</li>,
        <li>Weather is {data.weather}</li>,
         <li>Temperature is {data.temp} °C</li>,
        <li>Maximal temperature {data.maxTemp} °C</li>,
      <li>Minimal temperature {data.minTemp} °C</li>,
        document.getElementById('icon').innerHTML = ''
    });
});


const $myCountry = document.getElementById(`my-country`); 
  /************************************
   Search
   **********************************/


const showCountry = (query) => {

  const searchedCountry = url.name.filter( prod => prod.name.toLowerCase().includes( query.toLowerCase() ) ).map(url => getCoutryAsHtml(data.name)).join('');

  $mytopics.innerHTML = searchedCountry;
}

document.getElementById(`search-form`).addEventListener(`submit`, (event) => {
  event.preventDefault();

  let q = document.getElementById(`search`).value;
  showCountry(q);

});

const stuff = <svg width="200" height="200">       
  <image 
  href="https://s.cdpn.io/3/kiwi.svg">
  <image/>
</svg>;
