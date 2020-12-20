import styled from 'styled-components';

export const Container = styled.section`
  width: 90%;
  padding: 40px;
  border-radius: 16px;

  display: grid;
  grid-gap: 80px;
  grid-template-columns: 1fr 1fr;

  backdrop-filter: blur(6px);
  background-color: rgba(0, 0, 0, 0.4);
`;

export const LeftWrapper = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
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
`;

export const RightWrapper = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  flex-direction: column;

  > div {
    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    img {
      max-height: 60%;
    }
  }
`;
