
import { ArrowRight, Instagram, Linkedin, MessageCircle, Terminal } from "lucide-react"
import { Decoration, TitleSectionContainer } from "../../styles/globalStyles"
import { Container, AboutTextContainer, AboutTechContainer, TechsContainer, Title, ItemTech, Links } from "./aboutStyle"
export default function About(){
  return(
    <>
      <TitleSectionContainer>
        <h1>About<span>.</span></h1>
        <Decoration></Decoration>
      </TitleSectionContainer>
      <Container>
        <AboutTextContainer>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum iure, esse consequuntur soluta tempore officia officiis, ad nostrum ipsam minus at, corporis molestias ipsum nisi excepturi sed maiores numquam iste.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat nam dolore rem atque. Quod consequuntur quaerat velit inventore a? Eum unde illum doloribus aut iusto est cumque officia quibusdam ab.</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat nam dolore rem atque. Quod consequuntur quaerat velit inventore a? Eum unde illum doloribus aut iusto est cumque officia quibusdam ab. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem animi magnam aspernatur harum natus laboriosam voluptatibus cupiditate maxime suscipit quisquam fugiat rerum unde, vel voluptate illum pariatur? Explicabo, amet sunt.</p>
        <Links>
          <h3>meus links</h3>
          <ArrowRight color="#284BC5"/>
          <a href="">
          <MessageCircle color="#000"/>
          </a> 
          <a href="">
          <Linkedin color="#000"/> 
          </a>
          <a href="">
          <Instagram color="#000"/>
          </a>
        </Links>
        </AboutTextContainer>
        <AboutTechContainer>
            <TechsContainer>
              <Title>
                <Terminal color="#284BC5" />
                <h2>Techs</h2>
              </Title>
              <ItemTech>
                <li>HTML</li>
                <li>CSS</li>
                <li>Styled-components</li>
                <li>GitHub</li>
                <li>Figma</li>
                <li>CorelDraw</li>
                <li>Bash</li>
              </ItemTech>
            </TechsContainer>
            <TechsContainer>
              <Title>
                <Terminal color="#284BC5" />
                <h2>Fora da Tech</h2>
              </Title>
              <ItemTech>
                <li>Psicologia</li>
                <li>filosofia</li>
                <li>Muay Thai</li>
                <li>etc...</li>
              </ItemTech>
            </TechsContainer>
        </AboutTechContainer>
      </Container>
    </>
  )
}