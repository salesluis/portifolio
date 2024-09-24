import styled from "styled-components"

function Header() {
  return (
    <>
      <Container>
        <Itens>
          <a href="#">
            <img src="./src/assets/home.svg" alt="icon house" />
          </a>
          <a href="https://www.linkedin.com/in/luis-felipe-596586285/" target="_blank">
            <img src="./src/assets/linkedin.svg" alt="icon linkedin" />
          </a>
          <a href="https://github.com/salesluis" target="_blank">
            <img src="./src/assets/github.svg" alt="icon github"/>
          </a>
          <a href="#">
            <img src="./src/assets/curriculo.svg" alt="icon de arquivo" />
          </a>
        </Itens>

        <Itens>
          <a href="#sobre">sobre</a>
          <a href="#projetos">projetos</a>
          <a href="#techs">techs</a>
        </Itens>

        <Itens>   
          <Btn className="btn-contact">contato</Btn>
        </Itens>
      </Container>
    </>
  )
}

const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  height: 48px;
  border-radius: 16px;
  background-color: #fff;
  margin: 16px auto;
  padding: 0 36px;
  box-shadow: 1px 2px 6px rgba(0,0,0,15%);
`
const Itens = styled.div`
  display: flex;
  align-items: center;
  gap: 44px;
  a{
    color: #000;
    font-weight: 400;
  }
  .btn-contact{
    color: #D4DEFF;
    font-weight: 600;
  }
`

const Btn = styled.a`
  font-size:1.2rem;
  padding: 8px 22px;
  border-radius: 12px;
  cursor: pointer;
  background-color: #284BC5;
`
export default Header
