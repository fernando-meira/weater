import React, { useState, useEffect, useCallback } from 'react';
import swal from 'sweetalert';
import { FiSearch } from 'react-icons/fi';

import api from '../../services';
import { Header } from '../../components';
import Snow from '../../themes/assets/snow.svg';
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
  const [city, setCity] = useState('São Paulo');
  const [atmosphere, setAtmosphere] = useState({});
  const [temperature, setTemperature] = useState(0);
  const [place, setPlace] = useState(['------', '--']);
  const [description, setDescription] = useState('--');
  const [climateData, setClimateData] = useState(null);
  const [initialPosition, setInitialPosition] = useState([]);
  const [thermalSensation, setThermalSensation] = useState(0);

  const fetchWeater = useCallback(
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
          swal(
            'Opa, algo de errado!',
            'Se o erro persistir contate-nos!',
            'error',
          );
        }
      } else {
        try {
          const { data } = await api.get('weather', {
            params: {
              ...paramsToFetch,
              q: city,
            },
          });
          setClimateData(data);
        } catch (error) {
          swal(
            'Opa, algo de errado!',
            'Se o erro persistir contate-nos!',
            'error',
          );
        }
      }
    },
    [city, paramsToFetch],
  );

  const formatData = useCallback(() => {
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
      fetchWeater(initialPosition[0], initialPosition[1]);
    }
  }, [fetchWeater, initialPosition]);

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
    <Container>
      <Wrapper>
        <LeftWrapper>
          <Search onSubmit={handleSearch}>
            <input
              type="text"
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
            <img src={Snow} alt="snow" />
          </div>
        </RightWrapper>
      </Wrapper>
    </Container>
  );
};

export default Main;
