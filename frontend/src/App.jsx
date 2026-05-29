import { useState } from "react";
import { FaSearch } from "react-icons/fa";

function App() {

  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchWeather = async () => {

    setError("");

    if (!city.trim()) {
      setError("Please enter a city name");
      return;
    }

    try {

      setLoading(true);

      const response = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=6a7872ba72fc4c0888f64023262905&q=${city}`
      );

      const data = await response.json();

      if (data.error) {
        setError(data.error.message);
        setWeather(null);
      } else {
        setWeather(data);
      }

    } catch (err) {

      setError("Failed to fetch weather data");

    } finally {

      setLoading(false);

    }
  };

  // Enter key support
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      fetchWeather();
    }
  };

  return (

    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 flex items-center justify-center px-4">

      <div className="w-full max-w-md bg-white/10 backdrop-blur-xl rounded-3xl p-8 shadow-[0_0_40px_rgba(59,130,246,0.3)] border border-white/20 transition-all duration-300 hover:scale-[1.01]">

        {/* Heading */}

        <div className="text-center mb-8">

          <div className="text-6xl mb-3">
            🌤️
          </div>

          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
            Weather App
          </h1>

          <p className="text-slate-400 mt-2 text-sm">
            Real-time weather updates worldwide
          </p>

        </div>

        {/* Search Bar */}

        <div className="flex items-center gap-3 mb-5">

          <input
            type="text"
            placeholder="Enter city name..."
            value={city}
            onChange={(e) => setCity(e.target.value)}
            onKeyDown={handleKeyPress}
            className="flex-1 px-5 py-4 rounded-2xl bg-slate-800/80 text-white outline-none border border-slate-700 focus:border-blue-400 transition-all"
          />

          <button
            onClick={fetchWeather}
            className="bg-blue-500 hover:bg-blue-600 p-4 rounded-2xl transition-all shadow-lg hover:shadow-blue-500/40"
          >
            <FaSearch className="text-white text-lg" />
          </button>

        </div>

        {/* Error Message */}

        {error && (
          <p className="text-red-400 text-center mb-4">
            {error}
          </p>
        )}

        {/* Loading */}

        {loading && (
          <div className="text-center py-8">

            <div className="w-14 h-14 border-4 border-blue-400 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>

            <p className="text-blue-300">
              Fetching weather data...
            </p>

          </div>
        )}

        {/* Empty State */}

        {!weather && !loading && !error && (

          <div className="text-center py-10">

            <div className="text-7xl mb-4 animate-bounce">
              ☁️
            </div>

            <h2 className="text-2xl font-semibold text-white mb-2">
              Search Any City
            </h2>

            <p className="text-slate-400">
              Get live temperature, humidity,
              wind speed and weather conditions.
            </p>

          </div>

        )}

        {/* Weather Data */}

        {!loading && weather && (

          <div className="text-center">

            {/* Weather Icon */}

            {weather?.current?.condition?.icon && (

              <div className="flex justify-center mb-2">

                <img
                  src={weather.current.condition.icon}
                  alt="weather icon"
                  className="w-24 h-24"
                />

              </div>

            )}

            {/* City */}

            <h2 className="text-4xl font-bold mb-2">
              {weather?.location?.name}
            </h2>

            {/* Condition */}

            <p className="text-slate-300 mb-4 text-lg">
              {weather?.current?.condition?.text}
            </p>

            {/* Temperature */}

            <h1 className="text-7xl font-bold mb-8 text-blue-300">
              {weather?.current?.temp_c}°C
            </h1>

            {/* Details */}

            <div className="grid grid-cols-2 gap-4">

              <div className="bg-slate-800/80 p-5 rounded-2xl border border-slate-700">

                <h3 className="text-slate-400 mb-2">
                  Humidity
                </h3>

                <p className="text-3xl font-bold">
                  {weather?.current?.humidity}%
                </p>

              </div>

              <div className="bg-slate-800/80 p-5 rounded-2xl border border-slate-700">

                <h3 className="text-slate-400 mb-2">
                  Wind Speed
                </h3>

                <p className="text-3xl font-bold">
                  {weather?.current?.wind_kph} km/h
                </p>

              </div>

            </div>

          </div>

        )}

      </div>

    </div>

  );
}

export default App;