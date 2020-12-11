import React from 'react'

const index = ({classes, children }) => {
    return (
        <ul className={classes}>
            {children}
        </ul>
    )
}

export default index
