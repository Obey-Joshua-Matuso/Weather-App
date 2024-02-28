

/*
const apiUrl = "https://yahoo-weather5.p.rapidapi.com/weather?location=johannesburg&format=json&u=f";
const apiKey = '827cfd78e7msh6abab7b20070d90p1267e7jsn9360fa1ab593';

const headers = {
  'X-RapidAPI-Key': apiKey,
	'X-RapidAPI-Host': 'yahoo-weather5.p.rapidapi.com'
}

fetch(apiUrl, {
  method: 'GET',
  headers: headers
})
.then(response => {
  if(!response.ok){
    throw new Error("Network response was not ok");
  }
  return response.json();
})
.then(data => {
  const temperature = data.current_observation.condition.temperature;
  const high = data.current_observation.forcast.high;
  const low = data.current_observation.forcast.low;
  const text = data.current_observation.forcast.text;
})
.catch(error => {
  console.error('There was an error with the fetch operation', error);
})
*/