import Project from "./Project"
import { Container} from "./projectStyle"
import { Decoration, TitleSectionContainer } from "../../styles/globalStyles"
export default function Projects() {
  return(
    <> 
      <TitleSectionContainer>
        <h1>
          Projects<span>.</span>
        </h1>
        <Decoration></Decoration> 
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