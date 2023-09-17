import React from 'react'

function index() {
    const arr = ['hari', 'ram', 'geeta', 'ram', 'shiva', 'shiva', 'ram']
    // const color = ['red', 'green', 'black']
    const red = arr[0]
   

    return (
        <div>
            {arr.map((item) => (
                <div>
                    <ul>
                        <li style = {{color: 'red'}}>{item}</li>
                    </ul>
                </div>
            ))}
        </div>
    )
}


export default index

