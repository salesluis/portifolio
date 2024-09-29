import styled from "styled-components";

export const Container = styled.section`
  max-width: 1220px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  margin: 0 auto;
  
  img{
    max-width: 560px;
  }
`

export const ContainerProject = styled.div`
  display: flex;
  margin: 12px;
  flex-direction: column;
  align-items: start;
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
}
`
