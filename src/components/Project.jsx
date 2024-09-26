import { DescriptionProject } from "./DescriptionProject"
import { Container } from "../styles/projectStyle"

export default function Project() {
  return (
    <Container id="projetos">
      <img 
        src="./src/assets/mockup.png" 
        alt="" 
      />
      <DescriptionProject/>
    </Container>
  )
}
