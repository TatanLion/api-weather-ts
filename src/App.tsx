// NOTE CSS
import styles from './App.module.css'
// NOTE Components
import Form from './components/Form/Form';
import useWeather from './hooks/useWeather';
import WeatherDetail from './components/WeatherDetail/WeatherDetail';
import Alert from './components/Alert/Alert';

function App() {

  const { fetchWeather, weather, loading, notFound, hasWeatherData } = useWeather()

  return (
    <>
      <h1 className={styles.title}>Buscador Clima</h1>
      <div className={styles.container}>
        <Form 
          fetchWeather={fetchWeather}
        />
        {loading && <div className={styles.spinner}></div>}
        {hasWeatherData && ( <WeatherDetail weather={weather} /> )}
        {notFound && <Alert>Ciudad no Encontrada</Alert>}
      </div>
    </>
  )
}

export default App
