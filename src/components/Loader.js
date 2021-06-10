import React from 'react'
import HashLoader from "react-spinners/HashLoader"

const Loader = () => {
    return (
        <div style={{height:"70vh", width:"100vw", display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <HashLoader color="teal"/>
            
        </div>
    )
}

export default Loader
