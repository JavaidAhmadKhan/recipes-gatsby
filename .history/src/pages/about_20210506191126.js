import React from "react"
import Layout from "../components/Layout"
import { page, text } from "../examples/about.module.css"
import styled from "styled-components"

const about = () => {
  return (
    <Layout>
      <div className={page}>
        <h1>this is about page</h1>
        <p className={text}>Just a para</p>
      </div>
    </Layout>
  )
}

export default about
