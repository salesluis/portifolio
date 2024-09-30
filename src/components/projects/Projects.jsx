import Project from "./Project"
import { Container} from "./projectStyle"
import { Decoration, TitleSectionContainer } from "../../styles/globalStyles"
export default function Projects() {
  return(
    <> 
      <TitleSectionContainer>
        <Decoration></Decoration> 
        <h1>
          Projects<span>.</span>
        </h1>
      </TitleSectionContainer> 
      <Container>
      <Project/>
      <Project/>
      <Project/>
      <Project/>
    </Container>
    </>

  )
}