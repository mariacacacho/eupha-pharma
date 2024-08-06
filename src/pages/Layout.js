import { Outlet, Link } from 'react-router-dom'
import { LayoutContainer, HeaderContainer, ContentContainer, FooterContainer } from '../styles/Layout.style'
import Home from './Home'

const Layout = () => {
    return (
      <LayoutContainer>
        <HeaderContainer>
          <p>1</p>
        </HeaderContainer>
        <ContentContainer>
          <Home />
        </ContentContainer>
        <FooterContainer>
          <p>3</p>
        </FooterContainer>
        <Outlet />
      </LayoutContainer>)
}

export default Layout