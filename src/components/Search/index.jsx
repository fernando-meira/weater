import React from 'react';
import { FiSearch } from 'react-icons/fi';

import { Container } from './styles';

const Search = () => {
  return (
    <Container>
      <input type="text" placeholder="Pesquisar..." />

      <button type="button">
        <FiSearch size={24} color="#fff" />
      </button>
    </Container>
  );
};

export default Search;
