import styled from 'styled-components'
import {IoMdClose} from 'react-icons/io'

const MainDiv = styled.div`
  position: absolute;
  overflow: hidden;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  background-color: #fff;
  z-index: 999;
`
const ContentDiv = styled.div`
    margin: 0 auto;
    margin-top: 3em;
    width: 90%;
`

const CloseDiv = styled.div`
    text-align: right;
    font-size: 3rem;
    color: #b32020;
`
const MenuContent = styled.div`
  margin-top: 4em;
`

const Menus = styled.ul`
  display: flex;
  flex-direction: column;
  font-family: "Raleway", sans-serif;
  font-size: 2rem;
  font-weight: 600;
`

const Menu = styled.li`
  margin-bottom: 60px;
  cursor: pointer;
  transition: all 0.5s ease-in-out;

  &:hover{
    margin-left: 30px;
    color: #575252;
  }
    &:last-child{
      margin-bottom: 0;
    }

`

const Hamburger = () => {
  return (
    <MainDiv>
        <ContentDiv>
             <ContentDiv>
                <CloseDiv>  
                    <IoMdClose style={{cursor: 'pointer'}}/>
                </CloseDiv>

          <MenuContent>
            <Menus>
              <Menu>Home</Menu>
              <Menu>Shop</Menu>
              <Menu>Blog</Menu>
              <Menu>Contact</Menu>
            </Menus>
          </MenuContent>

                </ContentDiv>   
        </ContentDiv>
    </MainDiv>
  )
}

export default Hamburger