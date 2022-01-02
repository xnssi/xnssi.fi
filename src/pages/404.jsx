import * as React from "react"
import { Link } from "gatsby"

import Wrapper from "./_wrapper"

// markup
const NotFoundPage = () => {
  return (
    <Wrapper>
      <main>
        <title>404 - Page not found</title>
        <h1>404 - Page not found</h1>
        <p>
          <Link to="/">Go home</Link>.
        </p>
      </main>
    </Wrapper>
  )
}

export default NotFoundPage
