import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  max-width: 1150px;
  gap: 28px;
  margin: 48px auto;
  justify-content: space-between;
  @media (max-width: 650px) {
    flex-wrap: wrap;
  }
`

export const AboutTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  @media (max-width: 500px) {
    gap: 16px;
    
  }
  p{
    max-width: 60ch;
    padding: 0 8px;
  }
`

export const AboutTechContainer = styled(AboutTextContainer)`
display: flex;
flex-direction: column;
gap: 32px;
padding: 0 8px;
@media (max-width: 650px) {
  flex-direction: row;
}
@media (max-width: 420px) {
    flex-direction: column;
    gap: 8px;
  }
`

export const TechsContainer = styled.div`
display: flex;
flex-direction: column;
gap: 18px;
margin:32px 8px;
margin-bottom: 18px;
`
export const Title = styled.div`
display: flex;
justify-content: flex-start;
gap: 8px;
h2{
  font-size: 1.2rem;
  font-weight: 500;
}
`
export const ItemTech = styled.ul`
  max-width:300px;
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 8px;
  li{
    padding: 6px 22px;
    border-radius: 20px;
    background-color: #B5DBFF;
    font-weight: 400;
    @media (max-width: 500px) {

    font-size: .9rem;
  }
  }
 
`
export const Links = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: flex-start;
  margin-left: 8px;
  h3{
    color: #284BC5;
    font-weight: 500;
    
  }
`