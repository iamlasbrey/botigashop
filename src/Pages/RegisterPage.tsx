import styled from "styled-components"
import { Link } from "react-router-dom"


const MainDiv = styled.div`
  width: 100%;
  margin-top: 2em;
  margin-bottom: 4em;
`

const InsideDiv = styled.div`
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;
`

const Container = styled.div`
  margin: 0 auto;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 5px;
  padding: 40px 0px;
  width: 90%;
  max-width: 450px;
`

const Header = styled.h1`
  text-align: center;
  font-family: "Raleway", sans-serif;
  font-weight: 700;
  text-transform: capitalize;
  font-size: clamp(1.2rem, 3vw, 1.5rem);
  margin-bottom: 40px;
`

const Content = styled.div`
  
`


const Label = styled.p`
  font-family: "Raleway", sans-serif;
  font-weight: 600;
  font-size: clamp(1.1rem, 3vw, 1.3rem);
  margin-bottom: 10px;
  margin-top: 15px;
`

const Input = styled.input`
  outline: none;
  border: none;
  border-bottom: 3px solid #4141413b;
  width: 100%;
  padding: 5px 0px;
  font-size: clamp(1.1rem, 3vw, 1.3rem);
`

const ButtonDiv = styled.div`
  margin: 30px 0px;
`


const SendMessage = styled.button`
    padding: 10px 20px;
    border: none;
    cursor: pointer;
    transition: all 0.3s ease;
    border-radius: 5px;
    background: black;
    color: white;
    font-family: 'Raleway', sans-serif;
    font-size: clamp(.9rem, 3vw, 1rem);
    font-weight: bold;
    width: 100%;

    &:hover {
        background: #414141;
    }
`
const Form = styled.form`
  padding: 0px 20px;
`
const HaveAccount = styled.div`
  font-family: 'Open Sans', sans-serif;
`
const Span = styled.span`
  font-weight: bold;
`


const RegisterPage = () => {
  return (
    <MainDiv>
      <InsideDiv>
        <Container>
          <Header> Please Create Your Account </Header>

          <Content>
            <Form>
                    <Label>Username</Label> 
                    <Input type="" id="" name=""  /> 

                    <Label>Email</Label> 
                    <Input type="" id="" name=""  /> 

                    <Label>Password</Label> 
                    <Input type="" id="" name="" /> 

                    <Label>Confirm Password</Label> 
                    <Input type="" id="" name=""  /> 

                    <ButtonDiv>
                      <SendMessage>Sign Up</SendMessage>
                    </ButtonDiv>

                    <HaveAccount>
                        Already have an account? <Link to='/login'><Span>Login</Span></Link>
                    </HaveAccount>
                    </Form>
              </Content>

        </Container>
      </InsideDiv>
    </MainDiv>
  )
}

export default RegisterPage