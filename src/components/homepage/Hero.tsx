import styled from "styled-components"
import { Link } from "react-router-dom"

const MainDiv = styled.div`
  width: 100%;
  background: url('https://res.cloudinary.com/iamlasbrey/image/upload/v1691126090/botiga/Heroc_dgogw4.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 80vh;
  display: flex;
  align-items: center;
  


  @media screen and (max-width: 780px) {
    background: url('https://res.cloudinary.com/iamlasbrey/image/upload/v1691126091/botiga/tablet_aploy2.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    height: 80vh;
    }

    @media screen and (max-width:500px) {
    background: url('https://res.cloudinary.com/iamlasbrey/image/upload/v1691132403/botiga/mobile_nircmh.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    height: 80vh;
    }
`

const MainContent = styled.div`
    padding-left: 10%;

    @media screen and (max-width: 500px) {
        padding-left: 0%;
        text-align: center;
    }
`

const HeaderText = styled.h1`
    font-family: 'Raleway', sans-serif;
    font-weight: 600;
    text-transform: uppercase;
    font-size: clamp(2rem, 4vw, 3.5rem);
    margin-bottom: 10px;

    @media screen and (max-width: 500px) {
        color: white;
    }
`

const SubHeaderText = styled.h2`
    font-family: 'Open Sans', sans-serif;
    font-weight: 500;
    text-transform: capitalize;
    font-size: clamp(1.5rem, 4vw, 2rem);
    margin-bottom: 20px;
    color: #414141;

    @media screen and (max-width: 500px) {
        color: white;
        font-weight: 700;
    }
`

const HeaderButton = styled.button`
    font-family: 'Raleway', sans-serif;
    font-weight: 700;
    text-transform: uppercase;
    font-size: clamp(1.3rem, 4vw, 1.5rem);
    background: black;
    color: white;
    padding: 10px 20px;
    border: none;
    cursor: pointer;
    transition: all 0.3s ease;
    border-radius: 5px;

    &:hover {
        background: #414141;;
    }
`

const Hero = () => {
  return (
    <MainDiv>
        <MainContent>
            <HeaderText>Welcome to Botiga</HeaderText>
            <SubHeaderText>Headline that grabs people’s attention</SubHeaderText>
            <HeaderButton>
                <Link to='/shop/cosmetics'> Shop Now </Link>
            </HeaderButton>
        </MainContent>
    </MainDiv>
  )
}

export default Hero