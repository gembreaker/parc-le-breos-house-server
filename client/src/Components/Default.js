import React from 'react'

export default function Default({children, defaultComp}) {
    return (
        <header className={defaultComp}>{children}</header>
    )
}

Default.defaultProps = {
    defaultComp: "home-header"
};