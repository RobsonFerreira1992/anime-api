import styled from "styled-components";

export const Nav = styled.nav`
  width: 100%;
  padding: 20px 30px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  div{
    background-color:  ${props => props.theme.colors.secondary};
    width: auto;
    padding: 10px;
    border-radius: 10px;
    a{
      text-decoration: none;
      color:  ${props => props.theme.colors.ter};
      font-size: 20px;
      font-family: sans-serif;
    }
  }
  @media(max-width:768px){
    display: none;
  }
`