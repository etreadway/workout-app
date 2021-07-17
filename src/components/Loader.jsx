import React from 'react'
import {Spinner} from 'react-bootstrap'

const Loader = () => {
    return (
        <Spinner 
            animation = 'border'
            role = 'status'
        >
            <span className='visibility-hidden'></span>
        </Spinner>
    )
}

export default Loader;