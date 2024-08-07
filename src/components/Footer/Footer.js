import { FooterContainer } from '../../styles/Layout.style'
import { ContactContainer, Box, LogosContainer, CopyRightContainer, SocialLogosContainer } from './Footer.style'
import EuphaLogoWhite from '../../assets/eupha-white.png'
import HelixorLogo from '../../assets/helixor-white.png'
import MesoterLogo from '../../assets/mesoter-white.png'
import RegenhialLogo from '../../assets/regenhial-white.png'
import SymbioLogo from '../../assets/symbiopharm-white.png'
import DrReck from '../../assets/dr-white.png'
import KvpLogo from '../../assets/kvp-white.png'
import TegorLogo from '../../assets/tegor-white.png'
import { IoLogoWhatsapp } from 'react-icons/io'
import { BiLogoInstagramAlt } from 'react-icons/bi'
import { FaFacebookF } from 'react-icons/fa'

const Footer = () => {
  return (
    <FooterContainer>
      <ContactContainer>
        <Box>
          <p>Datos del contacto</p>
          <p>11 Avenida 15-11 Zona 10, Guatemala C.A.</p>
          <p>(+502) 4220 2493</p>
          <SocialLogosContainer>
            <IoLogoWhatsapp />
            <BiLogoInstagramAlt />
            <FaFacebookF />
          </SocialLogosContainer>
        </Box>
        <Box>
          <p>Horario</p>
          <p>Lunes - jueves de 7:00am a 5:00pm</p>
          <p>Viernes de 7:00am a 4:00pm</p>
        </Box>
        <Box>
          <img src={EuphaLogoWhite} />
        </Box>
      </ContactContainer>
      <LogosContainer>
        <img src={HelixorLogo} />
        <img src={MesoterLogo} />
        <img src={RegenhialLogo} />
        <img src={SymbioLogo} />
        <img src={DrReck} />
        <img src={KvpLogo} />
        <img src={TegorLogo} />
      </LogosContainer>
      <CopyRightContainer>
        <p>Copyright © Eupha 2024 | Todos los derechos reservados</p>
      </CopyRightContainer>
    </FooterContainer>
  )
}

export default Footer