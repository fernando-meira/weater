import React, { useState, useEffect, useCallback } from 'react';
import { FiSearch } from 'react-icons/fi';
import { toast, ToastContainer, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import api from '../../services';
import { Header } from '../../components';
import {
  sunny,
  snowIcon,
  rainIcon,
  stormIcon,
  cloudyDayIcon,
  snowBackground,
  rainyBackground,
  cloudyBackground,
  sunshineBackground,
} from '../../themes/assets';
import { useParams } from '../../hooks/ParamsContext';

import {
  Search,
  Wrapper,
  Climate,
  Container,
  Temperature,
  LeftWrapper,
  RightWrapper,
} from './styles';

const Main = () => {
  const paramsToFetch = useParams();

  const [min, setMin] = useState(0);
  const [max, setMax] = useState(0);
  const [city, setCity] = useState('');
  const [weater, setWeater] = useState('Snow');
  const [temperature, setTemperature] = useState(0);
  const [place, setPlace] = useState(['------', '--']);
  const [description, setDescription] = useState('--');
  const [climateData, setClimateData] = useState(null);
  const [initialPosition, setInitialPosition] = useState([]);
  const [thermalSensation, setThermalSensation] = useState(0);
  const [atmosphere, setAtmosphere] = useState({
    humidity: 0,
    clouds: 0,
    wind: 0,
  });

  let background = sunshineBackground;
  let iconWeather = sunny;

  switch (weater) {
    case 'Thunderstorm':
      background = rainyBackground;
      iconWeather = stormIcon;

      break;

    case 'Drizzle':
      background = rainyBackground;
      iconWeather = rainIcon;

      break;

    case 'Rain':
      background = rainyBackground;
      iconWeather = rainIcon;

      break;

    case 'Snow':
      background = snowBackground;
      iconWeather = snowIcon;

      break;

    case 'Clouds':
      background = cloudyBackground;
      iconWeather = cloudyDayIcon;

      break;

    case 'Clear':
      background = sunshineBackground;
      iconWeather = sunny;

      break;

    default:
      background = sunshineBackground;
      iconWeather = sunny;
      break;
  }

  const handleToastView = message => toast.dark(message.toUpperCase());

  const fetchForGeolocation = useCallback(
    async (latitude, longitude) => {
      if (latitude && longitude) {
        try {
          const { data } = await api.get('weather', {
            params: {
              ...paramsToFetch,
              lat: latitude,
              lon: longitude,
            },
          });

          setClimateData(data);
        } catch (error) {
          handleToastView();
        }
      }
    },
    [paramsToFetch],
  );

  const fetchWeater = useCallback(async () => {
    try {
      const { data } = await api.get('weather', {
        params: {
          ...paramsToFetch,
          q: city,
        },
      });
      setClimateData(data);
      setCity('');
    } catch (error) {
      handleToastView(error.response.data.message);
    }
  }, [city, paramsToFetch]);

  const formatData = useCallback(() => {
    setWeater(climateData?.weather?.[0].main);
    setTemperature(parseInt(climateData?.main.temp, 10));
    setDescription(climateData?.weather?.[0].description);
    setPlace([climateData?.name, climateData?.sys?.country]);
    setMin(parseFloat(climateData?.main?.temp_min).toFixed(1));
    setMax(parseFloat(climateData?.main?.temp_max).toFixed(1));
    setThermalSensation(parseFloat(climateData?.main?.feels_like).toFixed(1));
    setAtmosphere({
      humidity: climateData?.main?.humidity,
      clouds: climateData?.clouds?.all,
      wind: parseFloat(climateData?.wind?.speed).toFixed(1),
    });
  }, [climateData]);

  const handleSearch = useCallback(
    e => {
      e.preventDefault();

      fetchWeater();
    },
    [fetchWeater],
  );

  useEffect(() => {
    if (initialPosition) {
      fetchForGeolocation(initialPosition[0], initialPosition[1]);
    }
  }, [fetchForGeolocation, initialPosition]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(position => {
      const { latitude, longitude } = position.coords;

      setInitialPosition([latitude, longitude]);
    });
  }, []);

  useEffect(() => {
    if (climateData) {
      formatData();
    }
  }, [climateData, formatData]);

  return (
    <Container background={background}>
      <Wrapper>
        <LeftWrapper>
          <Search onSubmit={handleSearch}>
            <input
              type="text"
              value={city}
              placeholder="Pesquisar..."
              onChange={text => setCity(text.target.value)}
            />

            <button type="submit">
              <FiSearch size={24} color="#fff" />
            </button>
          </Search>

          <Temperature>
            <h1>
              {temperature}
              <small>ºC</small>
            </h1>

            <h3>{description}</h3>

            <h2>{`${place[0]}, ${place[1]}`}</h2>
          </Temperature>

          <ToastContainer
            draggable
            rtl={false}
            pauseOnHover
            closeOnClick
            hideProgressBar
            pauseOnFocusLoss
            autoClose={3000}
            transition={Slide}
            newestOnTop={false}
            position={window.innerWidth >= 1024 ? 'top-right' : 'top-center'}
          />

          <Climate>
            <li>
              <p>S. térmica:</p>

              <h2>{`${thermalSensation}ºC`}</h2>
            </li>

            <li>
              <p>Mínima:</p>

              <h2>{`${min}ºC`}</h2>
            </li>

            <li>
              <p>Máxima:</p>

              <h2>{`${max}ºC`}</h2>
            </li>
          </Climate>
        </LeftWrapper>

        <RightWrapper>
          <Header atmosphere={atmosphere} />

          <div>
            <img src={iconWeather} alt="snow" />
          </div>
        </RightWrapper>
      </Wrapper>
    </Container>
  );
};

export default Main;
