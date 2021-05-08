import React from "react"
import Layout from "../components/Layout"
import Images from "../examples/Images"
import { StaticImage } from "gatsby-plugin-image"

export default function Home() {
  return (
    <Layout>
      <main className="page">
        <header className="hero">
          <StaticImage
            src="../assets/images/main.jpeg"
            alt="eggs"
            className="hero-img"
            placeholder="tracedSVG"
            layout="fullWidth"
          ></StaticImage>
        </header>
      </main>
      <Images />
    </Layout>
  )
}
