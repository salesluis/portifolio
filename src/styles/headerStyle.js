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
    transition: .2s;
    &:hover{
      color: #284BC5;
    }
  }

  .btn-contact{
    color: #fff;
    font-weight: 600;
    &:hover{
    font-weight: 600;
    color: #fff;
    }
  }
`