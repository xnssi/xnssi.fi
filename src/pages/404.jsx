import * as React from "react"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"

import Wrapper from "./_wrapper"

// markup
const NotFoundPage = () => {
  return (
    <Wrapper>
      <Helmet>
        <title>Page not found</title>
      </Helmet>
      <main>
        <div className="businessCardContainer">
          <div className="businessCard">
            <div className="row">
              <div className="otherContent">
                <h1>Page not found</h1>
                <p><Link to="/">Back to home</Link></p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Wrapper>
  )
}

export default NotFoundPage
