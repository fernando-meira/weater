import styled from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.header`
  display: flex;
  align-items: center;

  input {
    height: 40px;
    border: none;
    padding: 10px;
    min-width: 300px;
    margin-right: 20px;
    border-radius: 10px;

    flex: 1;

    color: #fff;
    font-size: 16px;
    background: #c4c4c4;

    ::placeholder {
      color: #fff;
    }
  }

  button {
    width: 40px;
    height: 40px;
    border: none;
    padding: 10px;
    border-radius: 10px;

    display: flex;
    align-items: center;
    justify-content: center;

    background: #16c5bf;
  }

  ${media.lessThan('large')`
    input {
      min-width: 60%;
    }
  `}
`;
