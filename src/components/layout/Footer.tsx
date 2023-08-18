import styled from 'styled-components';
import {BsFacebook} from 'react-icons/bs'
import {AiFillTwitterCircle , AiFillInstagram} from 'react-icons/ai'

const MainDiv = styled.div`
  background-color: #d4d4d44e;
  padding: 70px 0px;
  font-family: "Open Sans", sans-serif;
  margin-top: 4em;
`
  
const InsideDiv = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
`  

const Top = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 4rem;

  @media screen and (max-width:500px) {
    flex-direction: column;
    }
  `

const Left = styled.div`
`
const Right = styled.div`
  
`

const Bleft = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  font-size: 2rem;

  @media screen and (max-width:500px) {
      margin-bottom: 15px;
    }
`

const BRight = styled.div`
  font-size: clamp(1.1rem, 3vw, 1.3rem);
`

const LeftImage = styled.img`
  height: 30px;
  object-fit: contain;
  margin-bottom: 20px;

  @media screen and (max-width:500px) {
      margin-bottom: 15px;
    }
`

const LeftDesc = styled.p`
  font-size: clamp(1rem, 3vw, 1.1rem);

  @media screen and (max-width:500px) {
      margin-bottom: 20px;
    }
`

const RightDiv = styled.div`
  display: flex;

  @media screen and (max-width:500px) {
    flex-direction: column;
    }
`

const UL = styled.ul`
  font-size: clamp(.9rem, 3vw, 1.1rem);

  &:not(:first-child) {
    margin-left: 7em;
  }

  @media screen and (max-width:500px) {
      &:not(:first-child) {
      margin-left: 0em;
      } 

      &:first-child {
        margin-bottom: 2em;
      } 

    }
`

const LI = styled.li`

&:first-child {
  font-weight: 700;
  font-size: clamp(1.2rem, 3vw, 1.2rem);
} 

  &:not(:first-child) {
    margin-top: 1rem;
  }
`

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width:500px) {
    flex-direction: column;
    }
`

const Footer = () => {
  return (
    <MainDiv>
      <InsideDiv>
          <Top> 
              <Left>
                <LeftImage src='https://res.cloudinary.com/iamlasbrey/image/upload/v1691126337/botiga/B_O_T_I_G_Alogo_ljgzoo.png'/>
                <LeftDesc>Give your customers insight into your product collection.</LeftDesc>
              </Left>

              <Right>
                <RightDiv>
                  <UL> 
                      <LI>Quick Links</LI>
                      <LI>Home</LI>
                      <LI>Blog</LI>
                      <LI>Shop</LI>
                      <LI>Contact</LI>
                  </UL>

                  <UL>
                      <LI>About</LI>
                      <LI>Shipping</LI>
                      <LI>Terms</LI>
                      <LI>Policy</LI>
                  </UL>
                </RightDiv>

              </Right>
             </Top>
          <Bottom> 
              <Bleft>
                  <BsFacebook style={{cursor: 'pointer'}}/>
                  <AiFillTwitterCircle style={{cursor: 'pointer'}}/>
                  <AiFillInstagram style={{cursor: 'pointer'}}/>
              </Bleft>
              <BRight>
              © 2023 Botiga. Proudly powered by Botiga</BRight>
             </Bottom>
      </InsideDiv>
    </MainDiv>
  )
}

export default Footer