
import { Box, HeaderContainer } from '../../styles/Layout.style'
import { LogoContainer, MenuContainer, SignInContainer, MenuItem, MenuItems  } from './Header.style.js'
import Logo from '../../assets/eupha-full-color.png'
import { CiUser } from 'react-icons/ci'

const Header = () => {
  return (
    <HeaderContainer>
      <LogoContainer>
        <img src={Logo} />
      </LogoContainer>
      <MenuContainer>
        <MenuItems>
          <MenuItem><p>Familia Eupha</p></MenuItem>
          <MenuItem><p>Líneas</p></MenuItem>
          <MenuItem><p>Life Style</p></MenuItem>
          <MenuItem><p>Eupha World</p></MenuItem>
          <MenuItem><p>Contacto</p></MenuItem>
        </MenuItems>
        <SignInContainer>
          <div>
            <CiUser />
          </div>
        </SignInContainer>
      </MenuContainer>
    </HeaderContainer>
  )
}

export default Header