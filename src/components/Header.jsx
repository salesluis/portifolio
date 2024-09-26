import { Container, Icons, Links} from "../styles/headerStyle";
import { Btn } from "../styles/globalStyles";
export default function Header() {
  return (
    <>
      <Container>
          <Icons>
            <a href="#">
              <img className="home" src="./src/assets/home.svg" alt="icon house" />
            </a>
            <a href="https://www.linkedin.com/in/luis-felipe-596586285/" target="_blank">
              <img className="linkedin" src="./src/assets/linkedin.svg" alt="icon linkedin" />
            </a>
            <a href="https://github.com/salesluis" target="_blank">
              <img className="github" src="./src/assets/github.svg" alt="icon github"/>
            </a>
          </Icons>

          <Links>
            <a href="#sobre">sobre</a>
            <a href="#projetos">projetos</a>
            <a href="#techs">techs</a>
          </Links>
            <Btn className="btn-contact">contato</Btn>
      </Container>
    </>
  )
}
