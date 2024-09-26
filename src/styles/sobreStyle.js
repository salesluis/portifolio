import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  gap: 28px;
  margin: 62px 12px;
  justify-content: center;
  @media (max-width: 800px) {
    flex-wrap: wrap;
  }
`

export const ContainerSobre = styled.div`
  display: flex;
  gap: 42px;
  text-align: center;
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 4px 6px 6px rgba(0,0,0,15%); 
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 52px 64px;
  p{
    max-width: 720px;
    line-height: 22px;
    letter-spacing: .6px;
  }
`
export const ContainerTechs = styled(ContainerSobre)`
`

export const Title = styled.h1`
  color: #284BC5;
  font-size: 1.3rem;
  font-weight: 400;
`

export const ListHabilidades = styled.ul`
  display: flex;
  flex-direction: column;
`
