import styled from 'styled-components'

export const LinesContainer = styled.div`
  margin-top: 56px;
  h1{
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 56px;
  }

  span{
    color: #EA0B2A;
  }
`

export const LogosContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-items: center;
  padding: 0 200px;
  margin-bottom: 56px;
  justify-items: center;

  img{
    width: 170px;
  }
`