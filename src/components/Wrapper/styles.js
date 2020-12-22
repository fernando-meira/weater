import styled from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.section`
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

  display: flex;
  grid-area: one;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  ${media.lessThan('large')`

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
      margin-bottom: 30px;

      font-weight: 200;
    }
  }

  ${media.lessThan('large')`
    li {
      p {
        margin-bottom: 0;

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

  display: flex;
  grid-area: two;
  align-items: center;
  flex-direction: column;
  justify-content: space-evenly;

  > div {
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    > img {
      width: auto;
      max-width: 250px;
    }
  }

  ${media.lessThan('large')`
    flex-direction: column-reverse;
    justify-content: space-between;

    > div {
      width: 100%;

      display: flex;
      align-items: center;
      justify-content: center;

      > img {
        width: auto;
        max-width: 220px;
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
