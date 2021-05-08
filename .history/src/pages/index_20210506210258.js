import React from "react"
import Layout from "../components/Layout"

export default function Home() {
  return (
    <Layout>
      <div className={page}>
        <h1>home page</h1>
        <h1>hello world</h1>
        <h1>hello people</h1>
        <p className={text}>This is just a paragraph</p>
      </div>
    </Layout>
  )
}
