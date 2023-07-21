
import './App.css';

import Details from './Components/Details';

import Navbar from './Components/Navbar';

import WeatherState from './Contexts/WeatherState';

function App() {

  return (
    <div className="App">
      <WeatherState>
        <Navbar />
        <Details/>
      </WeatherState>
    </div>
  );
}

export default App;
