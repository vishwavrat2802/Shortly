import React from 'react'
import "./loader.css";

function Loader() {
    return (
        <>
            <div class="center">
                <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
            </div>
        </>
    )
}

export default Loader
