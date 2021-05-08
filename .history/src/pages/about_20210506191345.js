import React from "react"
import Layout from "../components/Layout"
import styled from "styled-components"

const about = () => {
  return (
    <Layout>
      <Wrapper>
        <h1>this is about page</h1>
        <p>Just a para</p>
      </Wrapper>
    </Layout>
  )
}

const Wrapper = styled.section`
  color: green;

  h1 {
    color: orangered;
  }

  .text {
    text-transform: uppercase;
  }
`

export default about
