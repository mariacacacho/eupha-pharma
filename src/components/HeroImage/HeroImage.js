import { HeroImageContainer, Button, HeroSectionOne, HeroSectionTwo } from './HeroImage.style'
import ImageSectionOne from '../../assets/HeroImage/section-one.png'
import ImageSectionTwo from '../../assets/HeroImage/section-two.png'

const HeroImage = () => {
  return(
    <HeroImageContainer>
      <HeroSectionOne>
        <h1>Eupha</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tempor ultricies pharetra. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tempor ultricies pharetra.</p>
        <Button>Iniciar Sesión</Button>
        <img src={ImageSectionOne} />
      </HeroSectionOne>
      <HeroSectionTwo>
        <h1>Pharma</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tempor ultricies pharetra. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tempor ultricies pharetra.</p>
        <img src={ImageSectionTwo} />
      </HeroSectionTwo>
    </HeroImageContainer>
  )
}

export default HeroImage