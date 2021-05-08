import React from "react"
import Layout from "../components/Layout"
import { page, text } from "../examples/about.module.css"

const about = () => {
  return (
    <Layout>
      <div className={page}>
        <h1>this is about page</h1>
        <p>Just a para</p>
      </div>
    </Layout>
  )
}

export default about
