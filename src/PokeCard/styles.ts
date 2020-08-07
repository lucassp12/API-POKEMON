import styled from "styled-components";


export const Header = styled.header`

  h1{
    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 24px;
    text-transform: uppercase;
    color: #fff;
    background: #ff4d4d;
    padding: 10px;
  }
  div{
    display: flex;

    strong {
      display: flex;
      justify-content: center;
      align-items: center;
      justify-content: center;
      width: 100%;

      font-size: 24px;
      color:#fff;
      text-transform: uppercase;
      background: green;
      padding: 20px;

      & + strong{
        background: #9e0089;
      }
    }
  }

`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  background: #fff;
  padding: 0px 30px 0px 30px;

  span{
    margin-top: 10px;
  }
`;

export const PokeInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  img{
    width: 200px;
  }

  ul{
    li{
      display: flex;
      align-items: center;
      justify-content: space-between;

      span{
        text-transform: uppercase;
      }

      input{
        margin-left: 10px;
      }
    }
  }
  div{
    height: 100%;
    top: 0;

    h1{
      margin-top: -70px;
      font-size: 40px;
    }
  }
`;

export const Evolution = styled.section`
  margin-top: 20px;
  display: flex;
  align-items: center;
  width: 100%;
  background: #ff4d4d;
  padding: 10px;

  strong{
    font-size: 15px;
      color:#fff;
  }


`;
