import { Container, Icons, Links} from "./headerStyle";
import { Btn } from "../../styles/globalStyles";
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
            <a href="#about">sobre</a>
            <a href="#projects">projetos</a>
            <a href="#about">skils</a>
          </Links>
            <Btn id="#footer" className="btn-contact">contato</Btn>
      </Container>
    </>
  )
}
