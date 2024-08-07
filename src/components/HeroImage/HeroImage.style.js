import styled from 'styled-components'

export const HeroImageContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 80vh;
  min-height: 80dvh;
`

export const HeroSectionOne = styled.div`
  background-color: #FFFFFF;
  padding-top: 10em;
  display: flex;
  flex-direction: column;

  h1{
    color: #EA0B2A;
    font-size: 6em;
    text-transform: uppercase;
    padding-left: 100px;
  }

  p{
    color: #282C34;
    font-size: 1em;
    width: 60%;
    padding-left: 100px;
  }

  img{
    width: 40%;
    margin-top: -300px;
    align-self: end;
  }
`

export const HeroSectionTwo = styled.div`
  background-color: #282C34;
  padding-top: 10em;
  display: flex;
  flex-direction: column;

  h1{
    color: #FFFFFF;
    font-size: 6em;
    text-transform: uppercase;
    padding-left: 100px;
  }

  p{
    color: #CCCCCC;
    font-size: 1em;
    width: 60%;
    padding-left: 100px;
  }

  img{
    width: 40%;
    margin-top: -300px;
    align-self: start;
  }
`

export const Button = styled.button`
  margin-left: 100px;
  width: 200px;
  margin-top: 20px;
  background-color: white;
  border: 1px solid #EA0B2A;
  color: #EA0B2A;
  border-radius: 30px;
  padding: 12px 52px 12px 52px;
`