
import { Container, ContainerSobre, ContainerTechs, Title } from "../styles/sobreStyle"
import Skils from "./Skils"
export default function Sobre(){
  return (
    <Container>
      <ContainerSobre>
        <Title>sobre mim</Title>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo dolor ex quos reprehenderit pariatur sint amet voluptate, quas quibusdam dolorum rem odio! Numquam rerum, Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates enim vitae quas eveniet itaque saepe placeat veritatis? Dicta, non saepe quis sunt repellat sed repellendus aspernatur deserunt maxime voluptas aut? enim labore exercitationem nemo ullam eaque! Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi possimus, unde obcaecati in ad doloremque maxime nam explicabo ea quia culpa doloribus consectetur ratione rem alias voluptates. Debitis, unde? Modi?</p>
      </ContainerSobre>
  
      <ContainerTechs>
        <Title>habilidades</Title>
        <Skils/>
      </ContainerTechs>
    </Container>
  )
}
