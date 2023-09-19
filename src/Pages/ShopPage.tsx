import styled from 'styled-components'
import { useAppDispatch } from "../app/hooks"
import { myProduct } from '../models/productModel'
import { open } from '../features/modals/QuickViewSlice'
import { useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'



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
  margin-bottom: 15px;
`

const TopDesc = styled.p`
  text-align: center;
  font-size: clamp(1.2rem, 3vw, 1.4rem);
  font-family: "Open Sans", sans-serif;
  color: #928e8e;
  margin-bottom: 50px;
`

const FilterDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 3em;
  font-family: "Raleway", sans-serif;

  @media screen and (max-width:500px) {
      flex-direction: column;
      align-items: flex-start;
    }
`

const FilterLeft = styled.div`
  font-size: clamp(1.2rem, 3vw, 1.4rem);

  @media screen and (max-width:500px) {
      margin-bottom: 20px;
    }
`

const FilterRight = styled.div`
  position: relative;
  display: flex;
`

const ProductItems = styled.div`
   display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    grid-gap: 2rem;
`
  
const ProductItem = styled.div``


const Dissapear = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.295);
    display: flex;
    align-items: center;
    justify-content: center;
    display: none;
`

const Top = styled.div`
    position: relative;
    cursor: pointer;

    &:hover ${Dissapear}{
        display: flex;
    }
`

const Quick = styled.button`
    padding: 10px 20px;
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


const Bottom = styled.div`
  text-align: center;
  padding: 10px 5px 10px 5px;
  font-family: 'Open Sans', sans-serif;
  font-family: "Raleway", sans-serif;
` 

const Image = styled.img`
  width: 100%;
  object-fit: cover;
`

const Desc = styled.p`
    font-weight: 600;
    margin-bottom: 10px;
    font-size: clamp(1rem, 3vw, 1.2rem);
    color: #414141;
`

const Price = styled.p`
    font-weight: 600;
    margin-bottom: 10px;
    font-size: 1.8rem;
`

const AddCart = styled.button`
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


const Select = styled.select`
  font-family: "Raleway", sans-serif;
  cursor: pointer;
  border: none;
  padding: 10px 30px 10px 15px;
  color: black;
  outline: none;
  font-size: clamp(1.2rem, 3vw, 1.4rem);
  background-image: none;

  &:ms-expand{
    display: none;
  }
`


const Option = styled.option`
  cursor: pointer;
  font-size: clamp(1rem, 3vw, 1.3rem);
`


const ShopPage  = () => {
  const [filters, setFilters] = useState<string>("default")
  const [shopItems, setShopItems] = useState<myProduct[]>([])
  const [fullList, setFullList] = useState<myProduct[]>([])
  const dispatch = useAppDispatch()
  

  const OpenModal=(id:string)=>{
    localStorage.setItem('quickid', id)
    dispatch(open())
}

  const location = useLocation()
  const cat = location.pathname.split("/")[2]

  const handleFilters=(event: React.FormEvent<HTMLSelectElement>)=>{
    const value = event.currentTarget.value
    setFilters(value)
  }
  

        useEffect(() => {
               const getProduct=async()=>{
                try {
                  const res = await axios.get(
                    cat ?
                    `/api/products?category=${cat}`
                    : '/api/products'
                    )
                  setShopItems(res.data);
                  setFullList(res.data)
                } catch (error) {
                  console.log(error); 
                }  
               }
               getProduct()
        }, [cat, location])



        useEffect(() => {
          if(filters === "newest"){
            setShopItems((prev)=>
              [...prev].sort((a,b)=> parseInt(a.createdAt) - parseInt(b.createdAt))
              )
          }else if (filters === "low"){
            setShopItems((prev)=>
            [...prev].sort((a,b)=> a.price - b.price)
            )
        }
          else if (filters === "high") {
            setShopItems((prev)=>
          [...prev].sort((a,b)=> b.price - a.price)
          )
      }else setShopItems(fullList)      
        }, [filters])

        
  return (
    <MainDiv>
      <InsideDiv>
          <TopHeader> Shop </TopHeader>
          <TopDesc>State the biggest use case of your product. Briefly expand on how this will help your customers.</TopDesc>

          <FilterDiv>
              <FilterLeft>
                Showing All {shopItems?.length} Items
              </FilterLeft>

              <FilterRight>

            
                  <Select onChange={handleFilters}> 
                    <Option value="default"> Default Sorting </Option>
                    <Option value="newest"> Sort By Latest  </Option>
                    <Option value="low"> Sort By Price : Low to High </Option>
                    <Option value="high"> Sort By Price : High to Low  </Option>
                  </Select>
              

              </FilterRight>
          </FilterDiv>

        <ProductItems>
          {
            shopItems?.map((product:myProduct)=>(
              <ProductItem key={product?._id}>
              <Top>
              <Link to= {`/product/${product?._id}`} >
                  <Image src={product?.img[0]} />
                  <Dissapear><Quick onClick={()=>OpenModal(product._id)} >Quick View</Quick></Dissapear>
                </Link>
              </Top>
              <Bottom>
                  <Desc>{ product?.title} </Desc>
                  <Price>${product?.price}</Price>
                  <AddCart> Add To Cart </AddCart>
              </Bottom>

            </ProductItem>
            ))
          }

        </ProductItems>

      </InsideDiv>
    </MainDiv>
  )
}

export default ShopPage