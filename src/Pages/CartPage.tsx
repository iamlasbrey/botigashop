import styled from 'styled-components'
import {AiFillCloseSquare, AiOutlineMinus, AiOutlinePlus} from 'react-icons/ai'
import { useAppDispatch, useAppSelector } from "../app/hooks"
import { myProduct } from '../models/productModel'

const MainDiv = styled.div`
  width: 100%;
  margin-top: 2em;
`

const InsideDiv = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
`

const TopHeader = styled.h1`
  text-align: center;
  font-family: "Raleway", sans-serif;
  font-weight: 700;
  font-size: clamp(1.8rem, 4vw, 4rem);
  margin-bottom: 30px;
`

const CartCover = styled.div`
    border: 2px solid #413f3f50;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
    margin-bottom: 30px;
`

const Top = styled.div`
    display: flex;
    justify-content: space-between;
    font-family: "Raleway", sans-serif;
    border-bottom: 2px solid #413f3f50;
    padding: 20px 10px;
`

const Product = styled.div`
    width: 40%;
    border: none;
    text-transform: uppercase;
    font-weight: bold;
    text-align: center;
`
const Price = styled.div`
    width: 15%;
    border: none;
    text-transform: uppercase;
    font-weight: bold;
    text-align: center;
`
const Quantity = styled.div`
    width: 15%;
    border: none;
    text-transform: uppercase;
    font-weight: bold;
    text-align: center;
`
const SubTotal = styled.div`
    width: 15%;
    border: none;
    text-transform: uppercase;
    font-weight: bold;
    text-align: center;
`

const BottomContainer = styled.div` 
  font-family: "Open Sans", sans-serif; 
`

const BottomItem = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  border-top: 2px solid #413f3f50;
`
const ProductDiv = styled.div`
  display: flex;
  align-items: center;
  width: 40%;
  justify-content: space-between;
  padding: 20px 5px;
`
const Div1 = styled.div`
  width: 5%;
  color: #721515;
  font-size: 2rem;
  cursor: pointer;
`

const Div2 = styled.div`
  width: 30%;
  text-align: center;
`

const Div3 = styled.div`
  width: 55%;
`


const Image = styled.img`
  width: 80%;
  height: 150px;
  object-fit: cover;
`

const Desc = styled.p`
  width: 100%;
`

const PriceDiv = styled.div`
  width: 15%;
  display: flex;
  align-items: center;
  justify-content: center;
`
const Cost = styled.p`
  font-size: clamp(.8rem, 2vw, 1.2rem);
  font-weight: bold;
`

const QuantityDiv = styled.div`
  width: 15%;
  display: flex;
  align-items: center;
  justify-content: center;
`

const SubtotalDiv = styled.div`
  width: 15%;
  display: flex;
  align-items: center;
  justify-content: center;
`

const SubTotalPrice = styled.p`
  font-size: clamp(.8rem, 3vw, 1.2rem);
  font-weight: bold;
`

const QuantityAmount = styled.p`
  font-weight: bold;
  font-size: clamp(.8rem, 3vw, 1.2rem);
`

const QuantityDiv1 = styled.div`
  border: 2px solid #413f3f50;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  padding: 10px 0px;
`

const CouponDiv = styled.div`
  margin-bottom: 50px;
`

const CouponForm = styled.form`
  width: 90%;
  max-width: 400px;
  display: flex;
`

const CouponInput = styled.input`
  width: 70%;
  height: 50px;
  outline: none;
  border: 1px solid #413f3f50;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  padding: 0px 10px;
  font-size: 1rem;
`

const CouponBotton = styled.button`
  width: 30%;
  background-color: black;
  color: white;
  border: none;
  font-family: "Raleway", sans-serif;
  font-size: .9rem;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
`

const CartTotalDiv = styled.div`
  display: flex;
  justify-content: end;
`

const CartTotal = styled.div`
  width: 100%;
  max-width: 450px;
  border: none;
  background: #d4d4d421;
  padding: 30px 20px;
`

const CartTotalTitle = styled.h1`
  font-family: "Raleway", sans-serif;
  font-size: clamp(1.5rem, 3vw, 2.5rem);
  font-weight: bold;
  text-transform: capitalize;
  margin-bottom: 20px;
`

const CartTotalDiv2 = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const CartTotalDesc = styled.p`
  font-size: clamp(.8rem, 3vw, 1rem);
  font-family: "Raleway", sans-serif;
  text-transform: capitalize;
`

const CartTotalAmount = styled.p`
  font-size: clamp(1rem, 3vw, 1.2rem);
  font-family: "Raleway", sans-serif;
`

const CartTotalDiv3 = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: "Raleway", sans-serif;
  margin-bottom: 2em;

`

const CartTotalDesc3 = styled.p`
  font-weight: bold;
`

const CartTotalAmount3 = styled.p`
  font-size: clamp(1rem, 3vw, 3rem);
  font-weight: bold;
`

const Separate = styled.div`
  height: 1px;
  width: 100%;
  background-color: #3f3f3f32;
  margin: 20px 0px;
`

const Proceed = styled.button`
  width: 100%;
  border: none;
  padding: 20px 0px;
  font-family: "Raleway", sans-serif;
  background: black;
  color: white;
  font-size: clamp(1rem, 3vw, 1.5rem);
  cursor: pointer;
  font-weight: bold;
  border-radius: 5px;
`


const CartPage = () => {

  const cartItems  = useAppSelector((state:any)=>state.cartItems)
  

  return (
    <MainDiv>
    <InsideDiv>
        <TopHeader> Cart </TopHeader>

        <CartCover>
            <Top>
                <Product>Product</Product>
                <Price>price</Price>
                <Quantity>quantity</Quantity>
                <SubTotal>subtotal</SubTotal>
            </Top>

            {
              cartItems?.products?.map((cartitem:myProduct)=>(
                <BottomContainer>
              
                <BottomItem>

                    <ProductDiv>

                      <Div1>
                          <AiFillCloseSquare />
                      </Div1>

                      <Div2>
                           <Image src={cartitem?.img[0]}/>
                       </Div2>

                        <Div3>
                          <Desc> {cartitem?.title} </Desc>
                        </Div3>

                    </ProductDiv>

                    <PriceDiv> <Cost> ${cartitem?.price}  </Cost> </PriceDiv>

                    <QuantityDiv>
                      <QuantityDiv1>
                        <AiOutlineMinus style={{fontSize: "1.2rem", cursor: "pointer"}}/>
                          <QuantityAmount> {} </QuantityAmount>
                        <AiOutlinePlus style={{fontSize: "1.2rem", cursor: "pointer"}}/>
                        </QuantityDiv1>
                    </QuantityDiv>

                    <SubtotalDiv> <SubTotalPrice> ${  }  </SubTotalPrice> </SubtotalDiv>
                </BottomItem>

            </BottomContainer>

              ))
            }


        </CartCover>

        <CouponDiv>
            <CouponForm>
              <CouponInput placeholder='Coupon Code'/>
              <CouponBotton> Apply Coupon </CouponBotton>
            </CouponForm>
        </CouponDiv>

        <CartTotalDiv>
              <CartTotal>
                  <CartTotalTitle> Cart totals </CartTotalTitle>
                  <CartTotalDiv2> 
                      <CartTotalDesc> SUBTOTAL </CartTotalDesc>
                      <CartTotalAmount> $50 </CartTotalAmount>
                   </CartTotalDiv2>

                   <Separate />

                   <CartTotalDiv3> 
                      <CartTotalDesc3> TOTAL </CartTotalDesc3>
                      <CartTotalAmount3> $50 </CartTotalAmount3>
                   </CartTotalDiv3>

                <Proceed>
                    Proceed to Checkout
                </Proceed>

              </CartTotal>
        </CartTotalDiv>
            
    </InsideDiv>
  </MainDiv>
  )
}

export default CartPage