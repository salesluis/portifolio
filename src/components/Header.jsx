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
            <a href="#" target="_blank">
              <img className="linkedin" src="./src/assets/curriculo.svg" alt="icon linkedin" />
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
