import { LinesContainer, LogosContainer } from './Lines.style'
import HelixorLogo from '../../assets/Lines/helixor-logo.png'
import MesoterLogo from '../../assets/Lines/mesoter-logo.png'
import RegenhialLogo from '../../assets/Lines/regenhial-logo.png'
import SymbioLogo from '../../assets/Lines/symbio-logo.png'

const Lines = () => {
  return (
    <LinesContainer>
      <h1>Nuestras <span>Líneas</span></h1>
      <LogosContainer>
        <img src={HelixorLogo} />
        <img src={MesoterLogo} />
        <img src={RegenhialLogo} />
        <img src={SymbioLogo} />
      </LogosContainer>
    </LinesContainer>
  )
}

export default Lines