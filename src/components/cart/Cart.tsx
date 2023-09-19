import styled from "styled-components"
import { AiFillCloseSquare } from 'react-icons/ai'

const Container = styled.div`
  padding: 20px 20px;
  background: white;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`
const Title = styled.div`
  font-size: clamp(1.1rem, 3vw, 1.7rem);
  font-weight: bold;
  margin-bottom: 20px;
`

const CartDivContainer = styled.div``

const CartDiv = styled.div`
  display: flex;
  justify-content: space-between;
  border-top: 2px solid #72727234;
  padding: 25px 0px;
`

const Div1 = styled.div`
position: relative;
`

const MyImage = styled.img`
  width: 80px;
  height: 100px;
  object-fit: cover;
  margin-right: 25px;
`

const Div2 = styled.div``

const Div3 = styled.div`
  position: absolute;
  color: #af0303;
  font-size: 1.5rem;
  cursor: pointer;
  top: -8px;
  left: -6px;
`

const Top = styled.p`
  font-size: clamp(.8rem, 3vw, 1.1rem);
  margin-bottom: 10px;
  color: #464646;
`

const Bottom = styled.p`
  font-size: clamp(.8rem, 3vw, 1.4rem);
  color: #464646;
  font-weight: 500;
`

const Span = styled.span``

const Cart = () => {
  return (
    <Container>

      <Title> Your Cart </Title>

      <CartDivContainer>

        <CartDiv>
          <Div1>
            <Div3> <AiFillCloseSquare /> </Div3>
            <MyImage src="https://res.cloudinary.com/iamlasbrey/image/upload/v1693226213/botiga/products-all/Pearlville-1-420x504_n4lgbk.jpg"/>
          </Div1>

          <Div2>
            <Top>Eternal Sunset Collection Lip and Cheek</Top>
            <Bottom> 1 x <Span> $12.00 </Span> </Bottom>
          </Div2>
        </CartDiv>

        <CartDiv>
          <Div1>
            <Div3> <AiFillCloseSquare /> </Div3>
            <MyImage src="https://res.cloudinary.com/iamlasbrey/image/upload/v1693226213/botiga/products-all/Pearlville-1-420x504_n4lgbk.jpg"/>
          </Div1>

          <Div2>
            <Top>Eternal Sunset Collection Lip and Cheek</Top>
            <Bottom> 1 x <Span> $12.00 </Span> </Bottom>
          </Div2>
        </CartDiv>


      </CartDivContainer>

    </Container>
  )
}

export default Cart