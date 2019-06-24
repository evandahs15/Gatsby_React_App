import React from "react"
import { Link } from "gatsby"

import '../layouts/index.css'

const IndexPage = () => (
<div>
  <div className="Hero">
    <div className="HeroGroup">
      <h1>Learn to design and code react apps</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <Link to="/page-2/">Go to page 2</Link>
    </div>
  </div>
</div>
)

export default IndexPage
