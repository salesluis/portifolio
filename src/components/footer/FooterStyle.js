import styled from "styled-components";

export const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  flex-wrap: nowrap;
  gap: 40px;
  margin: 60px auto auto;
  background-color: #212223;
  color: #fff;
  padding: 64px 8px;
  @media (max-width: 550px) {
    flex-wrap: wrap;
    justify-content:flex-start;
    padding: 40px;
  }
`

export const TitleFooter = styled.h1`
font-size: 3.2rem;
max-width: 10ch;
font-weight: 800;
span{
  color: #284BC5;
}
`

export const NavContainer = styled.div`
display: flex;
flex-direction: column;
gap: 22px;
h2{
  font-size: 1.4rem;
}
a{
  text-decoration: underline;
  display: flex;
  align-items: center;
  color: #fff;
  &:hover{
    color: #284BC5;
  }
}
`