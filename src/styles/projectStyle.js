import styled from "styled-components";

export const Container = styled.section`
  max-width: 1220px;
  display: flex;
  align-items: center;
  margin: 0 auto;
  img{
    max-width: 400px;
  }
`

export const ContainerDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  p{
    max-width: 600px;
  }
`


export const Btns = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
`