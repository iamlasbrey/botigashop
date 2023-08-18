import styled from 'styled-components'
import { BsSearch, BsPerson } from 'react-icons/bs'
import { GrCart } from 'react-icons/gr'
import {GiHamburgerMenu} from 'react-icons/gi'
import { Link } from 'react-router-dom'

const MainDiv = styled.div`
    width: 100%;
    font-family: 'Raleway', sans-serif;
    padding: 30px 0px 30px 0px;
    `

const InsideDiv = styled.div`
    display: flex;
    justify-content: space-between;
    width: 90%;
    max-width: 1500px;
    margin: 0 auto;
    align-items: center;
`

const Image = styled.img`
    width: 150px;
    height: 50px;
    object-fit: contain;
`

const Center = styled.ul`
    display: flex;
    align-items: center;
    gap: 50px;
    font-size: clamp(1rem, 2vw, 1.3rem);

    @media screen and (max-width: 780px) {
      display: none;
    }
`
  
const RightIcons = styled.ul`
  display: flex;
  align-items: center;
  gap: 50px;
  font-size: clamp(1.2rem, 2vw, 1.5rem);
  cursor: pointer;

  @media screen and (max-width: 780px) {
      display: none;
    }
`

const LI = styled.li`
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: #928e8e;
  }
`

const RightIcon = styled.li`

`

const Extreme = styled.div`
  display: none;
  font-size: 1.5rem;
  cursor: pointer;

  @media screen and (max-width: 780px) {
      display: inline-block;
    }
`

const CartAndNumber = styled.div`
  position: relative;
`

const Letter = styled.span`
  position: absolute;
  left: 17px;
  top: -11px;
  color: white;
  background: #e63535;
  font-size:  1rem;
  font-weight: bold;
  height: 25px;
  width: 25px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`


const Header = () => {
  return (
    <MainDiv>

        <InsideDiv>

            <Link to='/'>
              <Image src='https://res.cloudinary.com/iamlasbrey/image/upload/v1691126337/botiga/B_O_T_I_G_Alogo_ljgzoo.png'/>
            </Link>


            <Center>
                  <LI><Link to='/'>Home</Link></LI>
                  <LI><Link to='/blog'>Blog</Link></LI>
                  <LI><Link to='/shop'>Shop</Link></LI>
                  <LI><Link to='/contact'>Contact</Link></LI>
            </Center>

            
              <RightIcons>
                  <RightIcon> <BsSearch/> </RightIcon>
                  <RightIcon> <BsPerson /> </RightIcon>

                  <CartAndNumber>
                        <RightIcon> <GrCart /> </RightIcon>
                          <Letter> 20 </Letter>
                  </CartAndNumber>

                </RightIcons>

            <Extreme>
                <GiHamburgerMenu />
            </Extreme>


        </InsideDiv>

    </MainDiv>
  )
}

export default Header