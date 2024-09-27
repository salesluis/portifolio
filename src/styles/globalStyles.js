import styled from "styled-components";

export const Btn = styled.a`
  font-size:1.2rem;
  padding: 8px 22px;
  margin: 4px;
  border-radius: 16px;
  cursor: pointer;
  color: #fff;
  background-color: #4C74FF;
  transition: .3s;
  &:hover{
    background-color: #284BC5;
    border-radius: 10px;
    color: #D4DEFF;
  }
    @media (max-width: 800px) {
      margin: 1px;
      font-size: 1rem;
    }
    @media (max-width: 600px) {
      padding: 8px 18px;
      font-size: .8rem;
      border-radius: 12px;
  }
  @media (max-width: 500px) {
      padding: 6px 14px;
      font-weight: 500;
      font-size: .8rem;
      border-radius: 10px;
      margin: 0;

  }
`