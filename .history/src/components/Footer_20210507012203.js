import React from "react"

const Footer = () => {
  return (
    <footer className="page-footer">
      <p>
        &copy; {new Date().getFullYear()} 2021 <span>SimpleRecipes</span>Built
        with{" "}
        <a href="http://www.gatsby.com/" target="_blank" rel="noreferrer">
          Gatsby
        </a>{" "}
      </p>
    </footer>
  )
}

export default Footer
