import styled from "styled-components";

export const Container = styled.section`
  max-width: 1220px;
  display: flex;
  align-items: center;
  margin: 104px auto;
  img{
    max-width: 400px;
    @media (max-width: 800px) {
      max-width: 300px;
    }
    @media (max-width: 600px) {
        max-width: 200px;
      }
  }
  @media (max-width: 800px) {
    margin: 84px auto;
    }
`

export const ContainerDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  h1{
    @media (max-width: 600px) {
          font-size: 1.2rem;
      }
  }
  p{
    max-width: 600px;
    padding: 8px;
    @media (max-width: 600px) {
          font-size: .8rem;
      }
  }
  @media (max-width: 600px) {
          gap: 12px;
        }
`


export const Btns = styled.div`
  display: flex;
  flex-wrap: no-wrap;
  gap: 24px;
  @media (max-width: 600px) {
      gap: 4px;
    }
`