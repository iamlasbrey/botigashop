import Featured from "../components/homepage/Featured"
import FeaturedCollections from "../components/homepage/FeaturedCollections"
import Hero from "../components/homepage/Hero"
import styled from "styled-components"

const MainDiv = styled.div`
  width: 100%;
`

const HomePage = () => {
  return (
    <MainDiv>
        <Hero />
        <Featured />
        <FeaturedCollections />
    </MainDiv>
  )
}

export default HomePage