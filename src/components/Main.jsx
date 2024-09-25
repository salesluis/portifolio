import { Container, SubTitle, Title, BtnMain } from "../styles/mainStyle"
import { ChevronDown } from "lucide-react"

export default function Main(){
  
  return(
    <>
      <Container>
        <Title>
          olá, me chamo <span className="negrito">luis!</span>
        </Title>
        <SubTitle>
          sou <span className="negrito">desenvolvedor web</span> com  foco em <span className="negrito">front end</span>, ajudo pessoas a tirar ideias do papel e apresentar para a internet
        </SubTitle>
        <BtnMain>
          <ChevronDown size={42} color="#BAC9FF"/>
        </BtnMain>
      </Container>
    </>
  )
}
