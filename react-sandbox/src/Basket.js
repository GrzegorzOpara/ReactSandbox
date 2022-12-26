import React, { useState, useCallback } from 'react'

import Increase from "./Increase"


const Basket = () => {

    const [cnt, setCnt] = useState(0)
    const increaseBasket = useCallback( () => {
        setCnt(cnt + 1)
    }, [cnt])

    return (
        <div>
            <h1>Basket count: {cnt}</h1>
            <Increase onClick={increaseBasket}/>
        </div>
    )
}

export default Basket;