import React from 'react';
import { FiDroplet, FiWind, FiUmbrella } from 'react-icons/fi';

import { Container } from './styles';

const Header = () => {
  const itemsToList = [
    {
      label: 'Umidade:',
      value: '69%',
      icon: <FiDroplet color="#16c5bf" size={30} />,
    },
    {
      label: 'Vento:',
      value: '13 km/h',
      icon: <FiWind color="#fff" size={30} />,
    },
    {
      label: 'Chuva:',
      value: '41%',
      icon: <FiUmbrella color="#fff" size={30} />,
    },
  ];

  return (
    <Container>
      <ul>
        {itemsToList.map(item => (
          <li key={item.label}>
            {item.icon}
            <div>
              <p>{item.label}</p>

              <h2>{item.value}</h2>
            </div>
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default Header;
