import styled from 'styled-components'
import {FaCaretDown} from 'react-icons/fa'

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
  appearance: none;
  padding: 10px 30px 10px 15px;
  color: black;
  outline: none;
  font-size: clamp(1.2rem, 3vw, 1.4rem);
`

const Caret = styled.div`
  position: absolute;
  height: 100%;
  width: 50px;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;

`

const Option = styled.option`
  cursor: pointer;
  font-size: clamp(1rem, 3vw, 1.3rem);
`



const ShopPage = () => {
  return (
    <MainDiv>
      <InsideDiv>
          <TopHeader> Shop </TopHeader>
          <TopDesc>State the biggest use case of your product. Briefly expand on how this will help your customers.</TopDesc>

          <FilterDiv>
              <FilterLeft>
                Showing All 8 Items
              </FilterLeft>
              <FilterRight>
                  <Select> 
                    <Option> Default Sorting </Option>
                    <Option> Sort By Latest  </Option>
                    <Option> Sort By Price : Low to High </Option>
                    <Option> Sort By Price : High to Low  </Option>
                  </Select>
                  <Caret> <FaCaretDown /> </Caret>
              </FilterRight>
          </FilterDiv>

        <ProductItems>
            <ProductItem>
              <Top>
                <Image src="https://res.cloudinary.com/iamlasbrey/image/upload/v1691406062/botiga/Glamifiedpeach-420x504_1_igqa3z.jpg"/>
                <Dissapear><Quick>Quick View</Quick></Dissapear>
              </Top>
              <Bottom>
                  <Desc>Eternal Sunset Collection Lip and Cheekstick</Desc>
                  <Price>$500</Price>
                  <AddCart> Add To Cart </AddCart>
              </Bottom>
            </ProductItem>

            <ProductItem>
              <Top>
                <Image src="https://res.cloudinary.com/iamlasbrey/image/upload/v1691406062/botiga/Glamifiedpeach-420x504_1_igqa3z.jpg"/>
              </Top>
              <Bottom>
                  <Desc>Eternal Sunset Collection Lip and Cheekstick</Desc>
                  <Price>$500</Price>
                  <AddCart> Add To Cart </AddCart>
              </Bottom>
            </ProductItem>

            <ProductItem>
              <Top>
                <Image src="https://res.cloudinary.com/iamlasbrey/image/upload/v1691406062/botiga/Glamifiedpeach-420x504_1_igqa3z.jpg"/>
              </Top>
              <Bottom>
                  <Desc>Eternal Sunset Collection Lip and Cheekstick</Desc>
                  <Price>$500</Price>
                  <AddCart> Add To Cart </AddCart>
              </Bottom>
            </ProductItem>

            <ProductItem>
              <Top>
                <Image src="https://res.cloudinary.com/iamlasbrey/image/upload/v1691406062/botiga/Glamifiedpeach-420x504_1_igqa3z.jpg"/>
              </Top>
              <Bottom>
                  <Desc>Eternal Sunset Collection Lip and Cheekstick</Desc>
                  <Price>$500</Price>
                  <AddCart> Add To Cart </AddCart>
              </Bottom>
            </ProductItem>

            <ProductItem>
              <Top>
                <Image src="https://res.cloudinary.com/iamlasbrey/image/upload/v1691406062/botiga/Glamifiedpeach-420x504_1_igqa3z.jpg"/>
              </Top>
              <Bottom>
                  <Desc>Eternal Sunset Collection Lip and Cheekstick</Desc>
                  <Price>$500</Price>
                  <AddCart> Add To Cart </AddCart>
              </Bottom>
            </ProductItem>

            <ProductItem>
              <Top>
                <Image src="https://res.cloudinary.com/iamlasbrey/image/upload/v1691406062/botiga/Glamifiedpeach-420x504_1_igqa3z.jpg"/>
              </Top>
              <Bottom>
                  <Desc>Eternal Sunset Collection Lip and Cheekstick</Desc>
                  <Price>$500</Price>
                  <AddCart> Add To Cart </AddCart>
              </Bottom>
            </ProductItem>
        </ProductItems>

      </InsideDiv>
    </MainDiv>
  )
}

export default ShopPage