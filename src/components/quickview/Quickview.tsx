import styled from "styled-components"
import {IoMdClose} from 'react-icons/io'
import {AiOutlineMinus, AiOutlinePlus} from 'react-icons/ai'
import { useAppSelector } from "../../app/hooks"
import { close } from "../../features/modals/QuickViewSlice"
import { useAppDispatch } from "../../app/hooks"
import { useState } from "react"
import axios from 'axios'
import { useEffect } from "react"
import { myProduct } from "../../models/productModel"




const MainDiv = styled.div`
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  z-index: 1;
  background-color: #0c0c0cc5;
  display: flex;
  justify-content: center;
`

const InsideDiv = styled.div`
  width: 90%;
  max-width: 900px;
  position: fixed;
  margin-top: 1em;
`

const CloseDiv = styled.div`
    color: white;
    font-size: 2rem;
    text-align: right;
    margin-bottom: .2em;
`

const BootmDiv = styled.div`
    background: white;
    padding: 40px; 
    display: flex;
    justify-content: space-between;
    height: 72%;
    max-height: 900px;

    @media screen and (max-width:500px) {
        flex-direction: column;
        padding: 10px;
        }
`

const Left = styled.div`
    width: 50%;

    @media screen and (max-width:500px) {
        width: 100%;
        margin-bottom: 20px;
        }
`

const Right = styled.div`
  width: 45%;

  @media screen and (max-width:500px) {
            width: 100%;
        }
`

const Top = styled.div``

const TopImage = styled.img`
    width: 100%;
    height: 450px;
    object-fit: cover;
    margin-bottom: 10px;
`

const UL = styled.ul`
    display: flex;
    justify-content: space-between;
`
    
const LI = styled.li``

const Bottom = styled.div``

const ULImage = styled.img`
    width: 100%;
    height: 100px;
    object-fit: cover;

    @media screen and (max-width:500px) {
        height: 90px;
    }
`

const Desc = styled.h1`
color: #414141;
  font-family: 'Open Sans', sans-serif;
  font-size: clamp(1.3rem, 3vw, 1.5rem);
  font-weight: 600;
  margin-bottom: 2rem;
`

const CounterCart = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`

const CounterDiv = styled.div`
  display: inline-block;
  width: 32%;
  border: 1px solid black;

  @media screen and (max-width:500px) {
      width: 55%;
    }
`

const Counter = styled.div`
  border: 1px solid black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  font-size: 1.5rem;
  font-weight: 600;
  font-family: 'Raleway', sans-serif;
  `

const AddCart = styled.button`
  width: 62%;
  font-size: 1rem;
  font-weight: 700;
  font-family: 'Raleway', sans-serif;
  border: none;
  font-size: 1.2rem;
  background: black;
  color: white;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover{
    background: #443d3d;
  }

  @media screen and (max-width:500px) {
      width: 40%;
    }
`

const SpanNumber = styled.span``

const Divider = styled.div`
  background: #9c9c9c71;
  width: 100%;
  height: 1px;
  margin: 40px 0px;
`

const AnotherHeader = styled.h1`
  font-family: "Open Sans", sans-serif;
  font-size: clamp(1.2rem, 3vw, 1.4rem);
  font-weight: 600;
`

const RightHeader = styled.h1`
  font-family: 'Open Sans', sans-serif;
  font-size: clamp(1.8rem, 3vw, 2rem);
  font-weight: 600;
  margin-bottom: 1rem;
`

const AnotherHeader2 = styled.span``

const Price = styled.h1`
  font-family: 'Raleway', sans-serif;
  font-size: clamp(3rem, 3vw, 4rem);
  font-weight: 600;
  margin-bottom: 1rem;
`



const Quickview = () => {
  const [ singleProduct, setsingleProduct ] = useState<myProduct>()
  const [ loading, isLoading ] = useState<boolean>(false)

  const { visible } = useAppSelector((state: any) => state.quickModal)
  const dispatch = useAppDispatch()

  const closeModal=()=>{
    localStorage.removeItem('quickid')
    dispatch(close())
  }

  const id = localStorage.getItem('quickid')

  const getQuickItems=async()=>{
    isLoading(true)
    try {
      if(id){
      const ItemRaw = await axios.get(`/api/products/find/${id}`)
      const Item = ItemRaw.data
      setsingleProduct(Item)
      isLoading(false)
    }
    } catch (error) {
        isLoading(false)
        console.log(error);   
    }
  }

  
  useEffect(() => {
      getQuickItems()
    return () => {}
  }, [id])  

  return (
    visible && (
      <MainDiv>
      <InsideDiv>
          <CloseDiv>
              <IoMdClose style={{cursor: 'pointer'}} onClick={closeModal}/>
          </CloseDiv>
              <BootmDiv>
                      <Left>
                          <Top>
                              <TopImage src={singleProduct?.img[0]}/>
                          </Top>
                          <Bottom>
                          <UL>
                            {
                              singleProduct?.img?.map((list)=>(
                                <LI> <ULImage src={list} /> </LI>
                              ))
                            }                         
                      </UL>
                          </Bottom>
                      </Left>
                      <Right>
                      <RightHeader> {singleProduct?.title}  </RightHeader>
                          <Price>$ {singleProduct?.price} </Price>
                          <Desc> {singleProduct?.desc} </Desc>
              <CounterCart>
                <CounterDiv>
                  <Counter>
                      <AiOutlineMinus style={{cursor: 'pointer'}}/> <SpanNumber>1</SpanNumber> < AiOutlinePlus style={{cursor: 'pointer'}}/>
                  </Counter>
                  </CounterDiv>
                <AddCart> Add To Cart </AddCart>
              </CounterCart>

              <Divider />

              <AnotherHeader>Category : <AnotherHeader2> {singleProduct?.categories} </AnotherHeader2></AnotherHeader>

                      </Right>
              </BootmDiv>
      </InsideDiv>
  </MainDiv>

    )
    )
}

export default Quickview