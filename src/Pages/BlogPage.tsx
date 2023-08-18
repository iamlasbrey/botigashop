import styled from 'styled-components'
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
    font-size: clamp(1.5rem, 3vw, 2rem);
    font-weight: 600;
    font-family: "Raleway", sans-serif;
    margin-bottom: 30px;
    color: #414141;
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


const BlogPage = () => {
  return (
    <MainDiv>
      <InsideDiv>
        <TopHeader>BlogPage Coming Soon</TopHeader>
        <BackHomeDiv>
          <BackHome><Link to='/'>Back to Home</Link></BackHome>
        </BackHomeDiv>
      </InsideDiv>
    </MainDiv>
  )
}

export default BlogPage