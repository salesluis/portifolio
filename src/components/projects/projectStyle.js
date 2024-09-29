import styled from "styled-components";

export const Container = styled.section`
  max-width: 1280px;
  display: flex;
  flex-wrap: wrap;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  margin: 0 auto;

`

export const ContainerProject = styled.div`
  display: flex;
  margin: 24px;
  flex-direction: column;
  align-items: start;
  img{
    max-width: 560px;
    @media (max-width: 1170px) {
      max-width: 460px; 
    }
    @media (max-width: 1300px) {
    max-width: 400px; 
    }
    @media (max-width: 900px) {
      max-width: 500px; 
    }
    @media (max-width: 500px) {
      max-width: 360px; 
    }
  }
`

export const ContainerTitle = styled.div`
    display: flex;
    gap: 8px;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 8px;
    h2{
      color: #222;
      font-size: 1.6rem;
      font-weight: 800;
    }
    span{
      color: #284BC5;
    }
    a{
      transition: .4s;
      &:hover{
        transform: translateY(-2px);
      }
    }
  `


export const DescriptionProject = styled.div`
  display: flex;
  margin: 4px 0;
  flex-direction: column;
  align-items: start;
  button{
    margin-top:8px;
    font-size: 1rem;
    color: #284BC5;
    cursor: pointer;
    text-decoration: underline;
    display: flex;
    align-items: center;
  }
  p{
  line-height: 20px;
  max-width: 50ch;
  @media (max-width: 1170px) {
      max-width: 40ch; 
    }
}
`