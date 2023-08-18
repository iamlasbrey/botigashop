import styled from 'styled-components'
import {BsFillTelephoneFill} from 'react-icons/bs'
import {AiOutlineMail} from 'react-icons/ai'

const MainDiv = styled.div`
  width: 100%;
  margin-top: 2em;
`

const InsideDiv = styled.div`
  width: 90%;
  max-width: 1300px;
  margin: 0 auto;
`

const TopHeader = styled.h1`
  text-align: center;
  font-family: "Raleway", sans-serif;
  font-weight: 700;
  font-size: clamp(1.8rem, 4vw, 4rem);
  margin-bottom: 1em;
`

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  @media screen and (max-width:500px) {
    flex-direction: column;
    }
`
  
const Left = styled.div`
  width: 50%;

  @media screen and (max-width:500px) {
      width: 100%;
    }
`

const Right = styled.div`
  width: 45%;

  @media screen and (max-width:500px) {
      width: 100%;
      margin-top: 30px;
    }
`

const ContactHeader = styled.h1`
  font-size: clamp(1.2rem, 3vw, 1.8rem);
  font-family: "Raleway", sans-serif;
  font-weight: 600;
  margin-bottom: 10px;
  text-transform: capitalize;
`

const ContentSub = styled.h2`
  font-size: clamp(1rem, 3vw, 1.2rem);
  font-family: "Open Sans", sans-serif;
  font-weight: 400;
  color: #414141;
`

const ContactHeader2 = styled.h2`
  font-size: clamp(1.2rem, 3vw, 1.8rem);
  font-family: "Raleway", sans-serif;
  font-weight: 600;
  margin-bottom: 10px;
  margin-top: 1.5em;
`

const ContentHeader3 = styled.div`
  font-size: clamp(1rem, 3vw, 1.2rem);
  font-family: "Open Sans", sans-serif;
  font-weight: 400;
  color: #414141;
  margin-bottom: 15px;
`

const Form = styled.form``

const Label = styled.p`
  font-size: clamp(1.2rem, 3vw, 1.5rem);
  font-family: "Raleway", sans-serif;
  font-weight: 600;
  margin-bottom: 15px;
`

const Input = styled.input`
  margin-bottom: 25px;
  border: none;
  border-bottom: 3px solid #4141413b;
  outline: none;
  width: 80%;
  font-size: clamp(1.2rem, 3vw, 1.5rem);

  @media screen and (max-width:500px) {
      width: 100%;
    }
`

const SendMessage = styled.button`
    padding: 10px 30px;
    border: none;
    cursor: pointer;
    transition: all 0.3s ease;
    border-radius: 5px;
    background: black;
    color: white;
    font-family: 'Raleway', sans-serif;
    font-size: 1.2rem;
    font-weight: bold;

    &:hover {
        background: #414141;
    }
`

const TextArea = styled.textarea`
  width: 80%;
  padding: 12px;
  border: 3px solid #4141413b;
  height: 200px;
  resize: vertical;
  outline: none;
  font-size: clamp(1.2rem, 3vw, 1.5rem);
  color: #414141;
  margin-bottom: 20px;

  @media screen and (max-width:500px) {
      width: 97%;
    }
`

const ContactPage = () => {
  return (
    <MainDiv>
      <InsideDiv>
          <TopHeader>Contact</TopHeader>
          <Content>
              <Left>
                <ContactHeader>How can we help you?</ContactHeader>
                <ContentSub>Thank you for your interest in Botiga. Please use this form to contact us. We will get back to you as soon as we can.</ContentSub>

                <ContactHeader2> Our Store </ContactHeader2>
                <ContentHeader3> 501-521 Fashion Ave, New York, NY 10018, USA </ContentHeader3>

                <ContentHeader3> <BsFillTelephoneFill /> +1 8664495623 </ContentHeader3>

                <ContentHeader3> <AiOutlineMail /> Cocolobeauty1793@gmail.com </ContentHeader3>

                <ContactHeader2> Store Hours </ContactHeader2>
                <ContentHeader3>Sun: Closed
                Mon to Sat: 10 AM – 5:30 PM
                </ContentHeader3>

              </Left>
              <Right>
                <Form>
                    <Label>First Name</Label> 
                    <Input type="" id="" name=""  /> 

                    <Label>Last Name</Label> 
                    <Input type="" id="" name="" /> 

                    <Label>Message</Label> 
                    <TextArea></TextArea> <br/>


                    <SendMessage> Send Message </SendMessage>
                </Form>
              </Right>
          </Content>
      </InsideDiv>
    </MainDiv>
  )
}

export default ContactPage