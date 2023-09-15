import styled from 'styled-components'
import bath from "../../imgassets/bath.jpg"
import lip from "../../imgassets/lip.jpg"
import make from "../../imgassets/makeup.jpg"
import treat from "../../imgassets/treat.jpg"
import { Link } from 'react-router-dom'


const MainDiv = styled.div`
    width: 100%;
`   
const InsideDiv = styled.div`
    width: 90%;
    max-width: 1400px;
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
    font-size: clamp(1.2rem, 3vw, 1.4rem);
    font-weight: 400;
    font-family: 'Open Sans', sans-serif;
    margin-bottom: 40px;
    color: #414141;
`

const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 2rem;
    font-family: "Open Sans", sans-serif;
    `

const Dissapear = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.336);
    display: flex;
    align-items: center;
    justify-content: center;
    display: none;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    color: white;
    font-size: clamp(1.1rem, 4vw, 1.5rem);
    font-weight: bold;
`

const GridItem = styled.div`
    position: relative;
    cursor: pointer;

&:hover ${Dissapear}{
        display: flex;
    }

`

const TopImage = styled.img`
    width: 100%;
    height: 100%;
`


const FeaturedCollections = () => {

    
  return (
    <MainDiv>
    <InsideDiv>
        <FeaturedHeader> Featured Categories </FeaturedHeader>
        <FeaturedText> Give your customers insight into your product collection. Select imagery and name that relates to the product category. </FeaturedText>

        <GridContainer>
            <GridItem>
                    <TopImage src={bath}/>
                    <Dissapear> <Link to='/shop'> Make Up </Link> </Dissapear>
            </GridItem>

            <GridItem>
                    <TopImage src={lip}/>
                    <Dissapear> <Link to='/shop'> Lip Stick </Link> </Dissapear>
            </GridItem>

            <GridItem>
                    <TopImage src={make}/>
                    <Dissapear> <Link to='/shop'>Bath Product </Link> </Dissapear>
            </GridItem>

            <GridItem>
                    <TopImage src={treat}/>
                    <Dissapear> <Link to='/shop'> Treatment </Link></Dissapear>
            </GridItem>

        </GridContainer>
    </InsideDiv>
    </MainDiv>
  )
}

export default FeaturedCollections