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
    @media (max-width: 600px) {
      font-size: .9rem;
      line-height: 20px;
      letter-spacing: .2px;
  }
  }
  @media (max-width: 600px) {
    gap: 24px;
    padding: 38px 18px;      
  }
`
export const ContainerTechs = styled(ContainerSobre)`
`

export const Title = styled.h1`
  color: #284BC5;
  font-size: 1.3rem;
  font-weight: 400;
`

export const ListSkils = styled.ul`
display: flex;
flex-direction: column;
align-items: flex-start;
gap: 12px;
@media (max-width: 800px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 600px) {
    text-align:start;
    list-style: none;
    gap: 10px;
    justify-content: center;
  }
  
`
export const Skill = styled.li`

`

