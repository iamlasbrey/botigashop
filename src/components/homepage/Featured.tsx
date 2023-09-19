import styled from "styled-components"
import { useAppSelector } from "../../app/hooks"
import { myProduct } from "../../models/productModel"
import { open } from "../../features/modals/QuickViewSlice"
import { useAppDispatch } from "../../app/hooks"
import { Link } from "react-router-dom"


const MainDiv = styled.div`
    width: 100%;
    margin-top: 4em;
    margin-bottom: 4em;
`
    
const InsideDiv = styled.div`
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
`

const FeaturedHeader = styled.h1`
    text-align: center;
    font-size: clamp(1.8rem, 3vw, 2rem);
    font-weight: 700;
    font-family: 'Raleway', sans-serif;
    margin-bottom: 10px;
`

const FeaturedText = styled.h2`
    text-align: center;
    font-size: clamp(1.3rem, 3vw, 1.5rem);
    font-weight: 400;
    font-family: 'Open Sans', sans-serif;
    margin-bottom: 30px;
    color: #414141;
`

const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    grid-gap: 2rem;
    `

const GridItem = styled.div`
     border-top-right-radius: 10px;
    border-top-left-radius: 10px;
`

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
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
`

const Top = styled.div`
    position: relative;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    cursor: pointer;

    &:hover ${Dissapear}{
        display: flex;
    }
`

const Image = styled.img`
    width: 100%;
    object-fit: cover;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
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
    font-family: 'Open Sans', sans-serif;
    text-align: center;
    padding: 10px 5px 10px 5px;
`

const Desc = styled.p`
    font-weight: 600;
    margin-bottom: 8px;
    font-size: clamp(1rem, 3vw, 1.2rem);
    color: #414141;

`

const Price = styled.p`
    font-weight: 600;
    margin-bottom: 8px;
    font-size: 1.8rem;
`

const Add = styled.button`
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

const ShopNowDiv = styled.div`
    margin-top: 5em;
    width: 100%;
    background: url('https://res.cloudinary.com/iamlasbrey/image/upload/v1691589811/botiga/hbg-1-webp-1440_580-_1desktop_zruygq.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    height: 70vh;
    text-align: center;
`
const ShopNowDivItems = styled.div`
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
    padding-top: 7em;
`

const ShopNowHeader = styled.h1`
    font-size: clamp(1.8rem, 3vw, 3rem);
    font-weight: bold;
    margin-bottom: 20px;
    font-family: "Raleway", sans-serif;
`

const ShopNowText = styled.h2`
    font-size: clamp(1.3rem, 3vw, 1.5rem);
    font-family: "Open Sans", sans-serif;
    margin-bottom: 20px;
    color: #414141;
    font-weight: 500;
`

const ShopNowButton = styled.button`
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


const Featured: React.FC =()=> {

    const { products } = useAppSelector((state:any) => state.products)
    const dispatch = useAppDispatch()

    const OpenModal=(id:string)=>{
        localStorage.setItem('quickid', id)
        dispatch(open())
    }

    
  return (
        <MainDiv>
        <InsideDiv>
            <FeaturedHeader>Featured Collection</FeaturedHeader>
            <FeaturedText>We have a wide range of cosmetic products made of natural ingredients. Cocolo Beauty has a leading cosmetic company</FeaturedText>
            <GridContainer>
                {
                    products?.filter((product:myProduct)=>product.featured)?.map((product:myProduct)=>(
                        <GridItem key={product._id}>
                            
                        <Top>
                            <Link to= {`/product/${product?._id}`} >
                                <Image src={product?.img[0]}/>
                                <Dissapear> <Quick onClick={()=>OpenModal(product._id)}> Quick View </Quick></Dissapear>
                            </Link>
                        </Top>
                        
                        
                        <Bottom>
                            <Desc>{product?.desc.slice(0, 70)}</Desc>
                            <Price>${product?.price}</Price>
                            <Add> Add To Cart </Add>
                        </Bottom>
                    </GridItem>
                    ))
                }
                </GridContainer>
        </InsideDiv>

      <ShopNowDiv>
        <ShopNowDivItems>
            <ShopNowHeader> Highlighted Section </ShopNowHeader>
            <ShopNowText> Try our product once and you will love to buy again we are giving up to 40% off to our new customers so don’t miss the opportunity to grab the deals today. </ShopNowText>
            <ShopNowButton>
                <Link to='/shop/cosmetics'> Shop Now </Link>
            </ShopNowButton>
        </ShopNowDivItems>
      </ShopNowDiv>
    </MainDiv>
    
  )
}

export default Featured