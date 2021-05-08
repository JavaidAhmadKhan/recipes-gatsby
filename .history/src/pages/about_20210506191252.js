import React from "react"
import Layout from "../components/Layout"
import { page, text } from "../examples/about.module.css"
import styled from "styled-components"

const about = () => {
  return (
    <Layout>
      <Wrapper>
        <div className={page}>
          <h1>this is about page</h1>
          <p className={text}>Just a para</p>
        </div>
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
