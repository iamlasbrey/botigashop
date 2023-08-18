import styled from 'styled-components'
import {Link} from 'react-router-dom'

const MainDiv = styled.div`
    width: 100%;
`
const ContentDiv = styled.div`
    margin: 0 auto;
    margin-top: 3em;
    width: 90%;
    max-width: 1200px;
    `
const Header = styled.h1`
    text-align: center;
    font-size: clamp(2rem, 4vw, 5rem);
    font-weight: 600;
    font-family: "Raleway", sans-serif;
    margin-bottom: 30px;
`
    
const SubHeader = styled.h2`
    text-align: center;
    font-family: "Raleway", sans-serif;
    font-size: clamp(1.5rem, 4vw, 3rem);
    font-weight: 600;
`

const BackHomeDiv = styled.div`
    text-align: center;
    margin-top: 30px;
`
const BackHome = styled.button`
    padding: 10px 30px;
    border: none;
    cursor: pointer;
    transition: all 0.3s ease;
    border-radius: 5px;
    background: black;
    color: white;
    font-family: 'Raleway', sans-serif;
    font-size: clamp(1rem, 3vw, 1.5rem);
    font-weight: bold;

    &:hover {
        background: #414141;
    }
`

const ErrorPage = () => {
  return (
    <MainDiv>
        <ContentDiv>
            <Header>404</Header>
            <SubHeader>Page Not Found</SubHeader>
            <BackHomeDiv>
                <BackHome><Link to='/'>Back to Home</Link></BackHome>
            </BackHomeDiv>
        </ContentDiv>
    </MainDiv>
  )
}

export default ErrorPage