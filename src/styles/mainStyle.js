import styled from "styled-components"

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  gap: 64px;
  align-items: center;
  margin: 66px auto;
  max-width: 1200px;
  padding: 90px;
  border-radius: 18px;
  background-color: #fff;
  box-shadow: 2px 4px 6px rgba(0,0,0,15%);
  text-transform: capitalize;
  text-align: center;
  .negrito{
    font-weight: 300;
    color: #000;
  }
  @media (max-width: 1220px) {
    gap: 34px;
    margin: 46px 12px;

  }
  @media (max-width: 800px) {
    padding: 80px;
    margin: 36px 12px;
  }
  @media (max-width: 600px) {
    padding: 60px 12px;
    gap: 18px;
    margin: 28px 12px;
  }
`

export const Title = styled.h1`
  font-size: 2.4rem;
  font-weight: 200;
  color: #3F3F3F;
  @media (max-width: 800px) {
    font-size: 2rem;
  }
  @media (max-width: 600px) {
    font-size: 1.5rem;
  }
`

export const SubTitle = styled.h2`
  max-width: 700px;
  font-size: 2.8rem;
  font-weight: 200;
  color: #3F3F3F;
  @media (max-width: 800px) {
    max-width: fit-content;
    font-size: 2.3rem;
  }
  @media (max-width: 600px) {
    font-size: 1.8rem;
  }
`

export const BtnMain = styled.a`
  padding: 10px 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #284BC5;
  border-radius: 26px;
  cursor: pointer;
  transition: .5s;
  &:hover{
    border-radius: 18px;
  }
  @media (max-width: 600px) {
    padding: 4px 6px;
    border-radius: 22px;
  }
`
