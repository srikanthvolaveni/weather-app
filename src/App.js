import React,{useState} from 'react';
import './App.css';

function App() {

  const [city,setCity] = useState('')
  const [result,setResult] = useState('')

  const onChangeCity = event =>{
    setCity(event.target.value)
  }

  const onSubmitCity = event =>{
    event.preventDefault();
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d885aa1d783fd13a55050afeef620fcb`)
    .then(response => response.json())
    .then(data => {
      const kelvin = data.main.temp 
      const celcius = kelvin-273.15
      setResult("Temperature at "+city+" is "+Math.round(celcius)+"°C");
    })
    .catch(err=>console.log(err))
    setCity('')
  }
  return (
    <div className="App">
      <center>
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">Weather App</h4>
            <form onSubmit={onSubmitCity}>
              <input type="text" name="city" value={city} onChange={onChangeCity}/> <br/> <br />
              <input type="submit" value="Get Temperature"/>
            </form>
            <h4 className='mt-3'>{result}</h4>
          </div>
        </div>
      </center>
    </div>
  );
}

export default App;
