import * as React from "react"

import "../css/css-reset.scss"
import "../css/styles.scss"

const Wrapper = ({ children }) => {
    return (
        <div className="wrapper">
            { children }
            <footer>
                <div>
                    This website does not store any cookies or other data to your device.
                </div>
            </footer>
        </div>
    )
}

export default Wrapper
