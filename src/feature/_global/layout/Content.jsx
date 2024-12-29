import React from 'react'

const Content = ({
    children,
    className
}) => {
    return (
        <div className={'px-[5vw] mx-auto' + ' ' + className}>
            {children}
        </div>
    )
}

export default Content