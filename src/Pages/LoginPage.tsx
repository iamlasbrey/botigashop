import styled from "styled-components"
import { toast } from "react-toastify"
import { Link } from "react-router-dom"
import { FormEvent, useEffect, useState } from "react"
import { useAppDispatch, useAppSelector } from "../app/hooks"
import { useNavigate } from "react-router-dom"
import { login, reset } from "../features/auth/authSlice"


const MainDiv = styled.div`
  width: 100%;
  margin-top: 2em;
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


const getInitialInputState= () => ({
  username: "",
  password: "",
})

interface InputState {
  username: string
  password: string
}


const LoginPage = () => {
  const [InputState, setInputState] = useState<InputState>(getInitialInputState())
  const {user, isLoading, isError, isSuccess, message} = useAppSelector((state: any) => state.auth)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()


  useEffect(() => {
    if(isError){
      toast.error(message)
    }
    if(isSuccess || user){
      navigate('/')
      toast.success("Account Created")
      dispatch(reset())
    }
  },[user, isLoading, isError, isSuccess, message, navigate, dispatch]) 
  

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target
    setInputState((prevState: InputState) => ({
      ...prevState, [name]: value
    }))
  }

  const onSubmit = (e: FormEvent)=>{
    e.preventDefault()
    if(!InputState.username || !InputState.password){
      return toast.error('All fields are required')
    }
    dispatch(login(InputState))
  }


  return (
    <MainDiv>
      <InsideDiv>
        <Container>
          <Header> Please Create Your Account </Header>

          <Content>
            <Form onSubmit={onSubmit}>
                    <Label>Username</Label> 
                    <Input type="text"  
                    name="username"  
                    value={InputState.username}
                    onChange={onChange}
                    /> 
                    

                    <Label>Password</Label> 
                    <Input type="password"  
                    name="password" 
                    value={InputState.password}
                    onChange={onChange}
                    />

                    <ButtonDiv>
                      <SendMessage>Login</SendMessage>
                    </ButtonDiv>

                    <HaveAccount>
                        New here? <Link to='/register'><Span>Sign Up</Span></Link>
                    </HaveAccount>
                    </Form>
              </Content>

        </Container>
      </InsideDiv>
    </MainDiv>
  )
}

export default LoginPage