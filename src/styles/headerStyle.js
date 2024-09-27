import styled from "styled-components";


export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  border-radius: 16px;
  background-color: #fff;
  margin: 16px auto;
  padding: 0 36px;
  box-shadow: 1px 2px 6px rgba(0,0,0,15%);
  @media (max-width: 1220px) {
    margin: 16px 12px;
  }
  @media (max-width: 800px) {
    padding: 4px 30px;
  }
  @media (max-width: 600px) {
    padding: 4px 10px;
  }
`
export const Icons = styled.div`
  display: flex;
  align-items: center;
  padding: 6px;
  gap: 34px;
  img{
    width: 18px;
    @media (max-width: 600px) {
      width:14px ;
  }
  }
  a{    
    transition: .3s;
    color: #000;
    &:hover{
      transform: translateY(-2px);
      color: #284BC5;
    }
    
  }
  @media (max-width: 600px) {
    gap: 24px;
    font-size: .8rem;
  }
  @media (max-width: 500px) {
    gap: 8px;
    
  }
`
export const Links = styled(Icons)`
  display: flex;
  margin: 0 auto;
  a{
    &:hover{
      font-weight:600;
      transform: translateY(-2px);
      color: #284BC5;
    }
  }
`

