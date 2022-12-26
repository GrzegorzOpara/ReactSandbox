import React from 'react'

const Increase = (props) => {
    const innerIncreaseBasket = () => {
        props.onClick()
    }

    return (
        <div>
            <button onClick={innerIncreaseBasket}>Increase basket!</button>
        </div>
    )
}

export default Increase;