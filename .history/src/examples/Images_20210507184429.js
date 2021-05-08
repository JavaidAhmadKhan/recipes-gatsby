import React from "react"
import styled from "styled-components"
import big from "../assets/images/big.jpg"

const Images = () => {
  return (
    <Wrapper>
      <img src={big} alt="big image" />

      <h2>Gatsby Image</h2>
    </Wrapper>
  )
}

const Wrapper = styled.section``

export default Images
