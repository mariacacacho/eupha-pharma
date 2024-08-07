import styled from 'styled-components'

export const LogoContainer = styled.div`
  padding: 32px 0 0 100px;
  background-color: #FFFFFF;
  img{
    width: 120px;
  }
`

export const MenuContainer = styled.div`
  display: grid;
  background-color: #282C34;
  color: white;
  grid-template-columns: 90% 10%;
  align-items: center;
  padding: 32px 100px 0 30px;
`

export const MenuItems = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);

  @media (max-width: 1500px) {
    /* Laptop */
  }

  @media (max-width: 1100px) {
    /* Tablets */
    display: none;
  }

  @media (max-width: 550px) {
    /* Phones */
    display: none;
  }
`

export const MenuItem = styled.div`
  p{
    text-transform: uppercase;
    font-weight: 500;
    text-align: center;
  }
`

export const SignInContainer = styled.div`
  height: 25px;
  display: flex;
  align-items: center;
  font-size: 1.3em;

  div{
    border: 1px solid white;
    padding: 5px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    display: grid;
    align-items: center;
    justify-content: center;
  }
`