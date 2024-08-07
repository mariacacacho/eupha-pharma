import styled from 'styled-components'

export const ContactContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 50px;
  padding: 0 50px;
`

export const Box = styled.div`
  p:nth-child(1){
    text-transform: uppercase;
    font-weight: 500;
    margin-bottom: 10px;
    font-size: 1.13em;
  }
`

export const LogosContainer = styled.div`
  padding: 20px 90px;
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  align-items: center;
  border-top: 1px solid rgba(102, 102, 102, 1);
  border-bottom: 1px solid rgba(102, 102, 102, 1);
`

export const CopyRightContainer = styled.div`
  margin-top: 20px;
  text-align: center;
  color: rgba(102, 102, 102, 1);
`

export const SocialLogosContainer = styled.div`
  font-size: 1.4em;
  display: flex;
  margin-top: 12px;

  svg{
    margin-right: 8px;
  }
`