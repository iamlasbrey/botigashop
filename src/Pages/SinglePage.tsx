import { Link } from 'react-router-dom'
import styled from 'styled-components'
import {AiOutlineMinus, AiOutlinePlus} from 'react-icons/ai'
import { useEffect, useState } from 'react'
import { myProduct } from '../models/productModel'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const MainDiv = styled.div`
  width: 100%;
  margin-top: 2em;
`

const InsideDiv = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
`

const Left = styled.div`
  width: 48%;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width:500px) {
    flex-direction: column-reverse;
    width: 100%;
    }
`
  
const Right = styled.div`
  width: 48%;

  @media screen and (max-width:500px) {
      width: 100%;
    }
`

const HeaderDiv = styled.div`
  font-size: clamp(1rem, 3vw, 1.3rem);
  font-weight: 500;
  color:#928e8e;
  font-family: 'Raleway', sans-serif;
  margin-bottom: 30px;
`

const ContentDiv = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width:500px) {
    flex-direction: column;
    }
`

const SubHeader = styled.span``

const Span = styled.span``

const LeftOne = styled.div`
  width: 14%;

  @media screen and (max-width:500px) {
    width: 100%;
    }
`

const LeftTwo = styled.div`
  width: 80%;

  @media screen and (max-width:500px) {
      width: 100%;
      margin-bottom: 20px;
    }
`

const UL = styled.ul`
 
 @media screen and (max-width:500px) {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
        }
`

const LI = styled.li`
   margin-bottom: 5px;
`

const ULImage = styled.img`
  width: 100%;
  height: 100px;
  object-fit: contain;
  cursor: pointer;
`

const LeftTwoImage = styled.img`
  width: 100%;
`
const RightHeader = styled.h1`
  font-family: 'Open Sans', sans-serif;
  font-size: clamp(1.2rem, 3vw, 1.6rem);
  font-weight: 600;
  margin-bottom: 1rem;
`

const Price = styled.h1`
  font-family: 'Raleway', sans-serif;
  font-size: clamp(1.5rem, 3vw, 4rem);
  font-weight: 600;
  margin-bottom: 1rem;
`

const Desc = styled.p`
  color: #414141;
  font-family: 'Open Sans', sans-serif;
  font-size: clamp(1rem, 3vw, 1.2rem);
  font-weight: 600;
  margin-bottom: 1rem;
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

const AnotherHeader2 = styled.span``


type singleProduct = {
        _id: string;
        title: string;
        desc: string;
        featured: boolean;
        img: string[];
        categories: string;
        price: number;
        createdAt: string;
        updatedAt: string;
        __v: number;
};


const SinglePage = () => {
  const [SinglePageData, setSinglePageData] = useState<singleProduct>()
  const params = useParams()
  const id = params.id;

  useEffect(()=>{
    const fetchSingleProduct=async()=>{
        try {
          const res = await axios.get(`/api/products/find/${id}`)
          setSinglePageData(res.data)
        } catch (error) {
          console.log(error);
        }
    }
    fetchSingleProduct()
  },[id])  



  return (
    <MainDiv>

       <InsideDiv>

        <HeaderDiv>
            <SubHeader> <Link to='/'> Home </Link> </SubHeader> <Span> / </Span> <SubHeader> {SinglePageData?.categories} </SubHeader> <Span> / </Span> <SubHeader> {SinglePageData?.title} </SubHeader> 
        </HeaderDiv>

        <ContentDiv>
        <Left>
          <LeftOne>
            <UL>
              {
                SinglePageData?.img?.map((myimage)=>(
                  <LI>
                    <ULImage src={myimage} />
                  </LI>
                ))
              }
            </UL>
          </LeftOne>
          <LeftTwo>
                <LeftTwoImage src={SinglePageData?.img[0]} />
          </LeftTwo>
        </Left>
            
            <Right>
                <RightHeader>{SinglePageData?.title} </RightHeader>
                <Price> ${SinglePageData?.price} </Price>
                <Desc> ${SinglePageData?.desc} </Desc>

                <CounterCart>
                  <CounterDiv>
                    <Counter>
                        <AiOutlineMinus style={{cursor: 'pointer'}}/> <SpanNumber>1</SpanNumber> < AiOutlinePlus style={{cursor: 'pointer'}}/>
                    </Counter>
                    </CounterDiv>
                  <AddCart> Add To Cart </AddCart>
                </CounterCart>

                <Divider />

                <AnotherHeader>Category : <AnotherHeader2> {SinglePageData?.categories} </AnotherHeader2></AnotherHeader>

            </Right>

        </ContentDiv>
         
       </InsideDiv>
    </MainDiv>
  )
}

export default SinglePage