import React from 'react'

const Error = () => {



    return (
        <div className='container'>
            <div className="error">
                <h2>Oops! An Error Occurred</h2>
                <h4>The server returned a "404 Not Found".</h4>
                <p>Something is broken. Please let us know what you were doing when this error occurred. 
                    We will fix it as soon as possible. Sorry for any inconvenience caused.</p>
            </div>
        </div>
    )
}

export default Error