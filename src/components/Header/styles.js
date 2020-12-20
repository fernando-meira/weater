import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  height: 40px;

  display: flex;
  align-items: center;

  ul {
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;

    li {
      list-style: none;

      display: flex;
      align-items: center;

      svg {
        margin-right: 20px;
      }

      > div {
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
      }

      p {
        font-size: 20px;
        font-weight: 200;
      }
    }
  }
`;
