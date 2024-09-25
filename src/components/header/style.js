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
`
export const Itens = styled.div`
  display: flex;
  align-items: center;
  padding: 6px;
  gap: 34px;
  a{
    color: #000;
    font-weight: 400;
    transition: .3s;
    &:hover{
      color: #284BC5;
      font-weight: 600;
      transform: translateY(-2px);
    }
  }



  .btn-contact{
    color: #D4DEFF;
    font-weight: 600;
  }
  
`

export const Btn = styled.button`
  font-size:1.2rem;
  padding: 8px 22px;
  border-radius: 16px;
  cursor: pointer;
  background-color: #284BC5;
  transition: .5s;
  &:hover{
    border-radius: 10px;
    color: #fff;
  }
`