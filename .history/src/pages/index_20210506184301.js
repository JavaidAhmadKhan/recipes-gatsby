import React from "react"
import Layout from "../components/Layout"
import { page, text } from "../examples/home.module.css"

export default function Home() {
  return (
    <Layout>
      <div className="home-heading"></div>
      <h1>home page</h1>
      <h1>hello world</h1>
      <h1>hello people</h1>
    </Layout>
  )
}
