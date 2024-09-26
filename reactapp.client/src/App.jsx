import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './pages/Login/login';
import Home from './pages/Home/home';

function App() {
    //const [forecasts, setForecasts] = useState();

    //useEffect(() => {
    //    populateWeatherData();
    //}, []);

    //const contents = forecasts === undefined
    //    ? <p><em>Loading... Please refresh once the ASP.NET backend has started. See <a href="https://aka.ms/jspsintegrationreact">https://aka.ms/jspsintegrationreact</a> for more details.</em></p>
    //    : <table className="table table-striped" aria-labelledby="tableLabel">
    //        <thead>
    //            <tr>
    //                <th>Date</th>
    //                <th>Temp. (C)</th>
    //                <th>Temp. (F)</th>
    //                <th>Summary</th>
    //            </tr>
    //        </thead>
    //        <tbody>
    //            {forecasts.map(forecast =>
    //                <tr key={forecast.date}>
    //                    <td>{forecast.date}</td>
    //                    <td>{forecast.temperatureC}</td>
    //                    <td>{forecast.temperatureF}</td>
    //                    <td>{forecast.summary}</td>
    //                </tr>
    //            )}
    //        </tbody>
    //    </table>;

    return (
        //<div>
        //    <h1 id="tableLabel">Weather forecast</h1>
        //    <p>This component demonstrates fetching data from the server.</p>
        //    {contents}
        //</div>


        <Router>
            <Routes>
                <Route path="/" element={<Login />} />  {/* Login page route */}
                <Route path="/home" element={<Home />} />    {/* Home page route */}
                {/*<Route path="*" element={<h2>404 Not Found</h2>} /> */}{/* Fallback for unmatched routes */}
            </Routes>
        </Router>

    );

    //async function populateWeatherData() {
    //    const response = await fetch('weatherforecast');
    //    const data = await response.json();
    //    setForecasts(data);
    //}
}

export default App;