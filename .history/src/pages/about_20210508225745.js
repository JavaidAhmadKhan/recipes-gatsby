import React from "react"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

const About = () => {
  return (
    <Layout>
      <main className="page">
        <section className="about-page">
          <article>
            <h2>I'm baby coloring book poke taxidermy</h2>
            <p></p>
            <p>Taiyaki tumblr flexitarian jean shorts brunch, aesthetic salvia retro.


</p>
            <Link to="/contact" className="btn">
              contact
            </Link>
          </article>
        </section>
      </main>
    </Layout>
  )
}

export default About
