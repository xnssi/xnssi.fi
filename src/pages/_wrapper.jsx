import * as React from "react"

import "../css/css-reset.scss"
import "../css/styles.scss"

const Wrapper = ({ children }) => {
    return (
        <div className="wrapper">
            { children }
        </div>
    )
}

export default Wrapper
