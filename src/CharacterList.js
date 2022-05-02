import React, { useState, useEffect } from 'react'
import './App.css'
import InfoWidget from './InfoWidget'

const CharacterList = props => {
    const { data } = props
    const [ activeCard, setActiveCard ] = useState(null)
    const changeCard = index => {
        setActiveCard(data[index])
    }


    return (
        <>
            <div className="content-div">
                {data.map((character, index) => (
                    <div onClick={() => changeCard(index)}>{character.name}</div>//make these links
                ))}
            </div>
            <InfoWidget data={activeCard} />
        </>

    )
}

export default CharacterList