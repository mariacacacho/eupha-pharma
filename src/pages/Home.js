import HeroImage from '../components/HeroImage/HeroImage'
import Lines from '../components/Lines/Lines'
import { HomeContainer } from '../styles/Layout.style'

const Home = () => {
    return(
      <HomeContainer>
       <HeroImage />
       <Lines />
      </HomeContainer>
    )
}

export default Home