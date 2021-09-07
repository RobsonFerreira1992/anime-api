import styled from "styled-components";

export const Cabecalho = styled.header`
  width: 100%;
  height: 150px;
  background: ${props => props.theme.colors.secondary};
  display: flex;
  align-items: center;
  justify-content: center;
  img{
    width: 150px;
  }
`