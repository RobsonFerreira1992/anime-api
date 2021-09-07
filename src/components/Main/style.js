import styled from "styled-components";

export const FormInput = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;

  form{
    display: flex;
    justify-content: space-around;
    width: 50%;
    margin: 20px 0;
    input{
        appearance: none;
        background: none;
        outline: none;
        border: none;
        display: block;
        width: 100%;
        max-width: 400px;
        padding: 16px;
        border-radius: 20px;
        background-color: #EEE;
        transition: 0.4s;
        ::placeholder {
						color: #888;
					}

					&:focus, &:valid {
						background-color: #313131;
						color: #FFF;
					}
    }
  }
  
`
export const MainContent = styled.main`
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  div{
    margin: 20px;
    width: 200px;
    a{
      text-decoration: none;
      h3{
      font-size: 14px;
      font-family: sans-serif;
      color: ${props => props.theme.colors.text};
      }
    }
    @media(max-width:768px){
      margin: 0 auto;
    }
    
  }
`