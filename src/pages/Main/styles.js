import styled from 'styled-components';
import media from 'styled-media-query';

import { sunshineBackground } from '../../themes/assets';

export const Container = styled.main`
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  background-size: 100% auto;
  background-repeat: no-repeat;
  background-position: center top;

  /* background-image: url(${sunshineBackground}); */
  background-image: ${({ background }) =>
    background ? `url(${background})` : `url(${sunshineBackground})`};

  .Toastify__toast--dark {
    border-radius: 4px;

    backdrop-filter: blur(10px);
    background-color: rgba(0, 0, 0, 0.4);
  }

  ${media.lessThan('large')`
    .Toastify__toast--dark {
      width: 90%;
      border-radius: 16px;

      background-color: rgba(0, 0, 0, 0.9)
    }
  `}
`;

export const Wrapper = styled.div`
  width: 90%;
  padding: 40px;
  border-radius: 16px;

  display: grid;
  grid-gap: 80px;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: 'one two';

  backdrop-filter: blur(6px);
  background-color: rgba(0, 0, 0, 0.4);

  ${media.lessThan('large')`
    height: 90%;
    padding: 20px;

    grid-gap: 0;
    grid-template-columns: 100%;
    grid-template-rows: 1fr 1fr;
    grid-template-areas:
    "one"
    "two";
  `}
`;

export const LeftWrapper = styled.div`
  width: 100%;

  display: grid;
  grid-area: one;
  grid-template-rows: 60px 1fr;

  ${media.lessThan('large')`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
  `}
`;

export const Search = styled.form`
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

export const Temperature = styled.div`
  width: 100%;
  padding: 45px 0;
  margin-top: 35px;
  border-bottom: 1px solid #fff;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  h1 {
    font-size: 100px;

    small {
      font-size: 30px;
      font-weight: 200;
    }
  }

  h3 {
    margin: 18px 0;

    font-size: 20px;
    font-weight: 200;
    text-transform: capitalize;
  }

  h2 {
    font-size: 25px;
    font-weight: 200;
  }

  ${media.lessThan('large')`
    padding: 20px 0;
    margin-top: 10px;

      h1 {
      font-size: 60px;

      small {
        font-size: 20px;
      }
    }

    h3 {
      margin: 4px 0;

      font-size: 16px;
    }

    h2 {
      font-size: 20px;
    }
  `}
`;

export const Climate = styled.ul`
  width: 100%;
  padding: 20px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  li {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;

    list-style: none;

    p {
      font-weight: 200;
    }
  }

  ${media.lessThan('large')`
    li {
      p {
        font-size: 16px;
      }

      > h2 {
        font-size: 16px;
      }
    }
  `}
`;

export const RightWrapper = styled.div`
  width: 100%;

  display: grid;
  grid-area: two;
  grid-template-rows: 60px 1fr;

  > div {
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    > img {
      width: auto;
      max-width: 250px;

      filter: drop-shadow(2px 4px 6px white);
    }
  }

  ${media.lessThan('large')`
    display: flex;

    align-items: center;

    flex-direction: column-reverse;
    justify-content: space-between;

    > div {
      width: 100%;

      display: flex;
      align-items: center;
      justify-content: center;

      > img {
        width: auto;
        max-width: 150px;
      }
    }
  `}

  ${media.lessThan('medium')`
    > div {
      > img {
        width: auto;
        max-width: 150px;
      }
    }
  `}
`;
