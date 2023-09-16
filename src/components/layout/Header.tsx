import styled from 'styled-components'
import { GrCart } from 'react-icons/gr'
import {GiHamburgerMenu} from 'react-icons/gi'
import { Link } from 'react-router-dom'
import { useAppSelector } from "../../app/hooks"
import {BsFillPersonFill} from 'react-icons/bs'
import { logout } from "../../features/auth/authSlice"
import { useAppDispatch } from "../../app/hooks"

const MainDiv = styled.div <{$primary?: boolean}>`
    width: 100%;
    font-family: 'Raleway', sans-serif;
    padding: 30px 0px 30px 0px;
    position: relative;
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
const RightIcon1 = styled.div`
  cursor: pointer;
  position: relative;
  font-family: 'Raleway', sans-serif;
  position: relative;
`

const LogoutIcon = styled.button`
    position: absolute;
    padding: 5px 20px;
    border: none;
    cursor: pointer;
    transition: all 0.3s ease;
    border-radius: 5px;
    background: black;
    color: white;
    font-family: 'Raleway', sans-serif;
    font-size: 1rem;
    font-weight: bold;
    top: 43px;
    right: -6px;
    display: none;

    &:hover {
        background: #414141;
    }
`


const RightIcon2 = styled.li`
  font-size: 1.5rem;
  font-weight: bold;
  font-family: 'Open Sans', sans-serif;
  cursor: pointer;
  display: flex;
  align-items: center;


  &:hover ${LogoutIcon}{
    display: inline-block
  }
`

const RightIcon3 = styled.div`
  font-size: clamp(1rem, 2vw, 1.2rem);
  font-weight: bold;
  text-transform: capitalize;
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

const BsDiv = styled.div`
  margin-right: 5px;
   font-size: 2rem;
`

const Header = () => {

  const { user } = useAppSelector((state: any) => state.auth)
  const dispatch = useAppDispatch()
  

  const logoutForm =()=>{
    dispatch(logout()) 
  }
  
  return (
    <MainDiv $primary>

        <InsideDiv>

            <Link to='/'>
              <Image src='https://res.cloudinary.com/iamlasbrey/image/upload/v1691126337/botiga/B_O_T_I_G_Alogo_ljgzoo.png'/>
            </Link>


            <Center>
                  <LI><Link to='/'>Home</Link></LI>
                  <LI><Link to='/blog'>Blog</Link></LI>
                  <LI><Link to='/shop/cosmetics'>Shop</Link></LI>
                  <LI><Link to='/contact'>Contact</Link></LI>
            </Center>

            
              <RightIcons>

              <RightIcon1> 
                      {
                        user ? (<RightIcon2 onClick={logoutForm}> <BsDiv> <BsFillPersonFill/> </BsDiv> {user?.username} <LogoutIcon onClick={logoutForm}> Logout </LogoutIcon> </RightIcon2> ) : <RightIcon3> <Link to='/login'> Login / Register </Link> </RightIcon3>
                      }    
                </RightIcon1>  

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