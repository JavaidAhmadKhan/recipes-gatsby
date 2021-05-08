import React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
import big from "../assets/images/big.jpg"

const Images = () => {
  return (
    <Wrapper>
      <StaticImage src="../assets/images/big.jpg" alt="food" />

      <h2>Gatsby Image</h2>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  img {
    width: 200px;
  }
`

export default Images
