import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css'

// console.log("TEST KEY", process.env.REACT_APP_WEATHER_API_KEY) 

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
