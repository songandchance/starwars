import React, { useEffect, useState } from 'react'
import CharacterList from './CharacterList'
import './App.css'

const Widget = props => {
    const [ characters, setCharacters ] = useState(false)

    useEffect(() => {
        fetch('https://swapi.dev/api/people')
            .then(response => response.json())
            .then(data => setCharacters(data.results))
    }, []);

    if (characters) {
        return (
            <div className='App-div' style={{ display:'flex' }}>
                <CharacterList data={characters}/>
            </div>
        )
    }

    return (
        <div>Loading...</div>
    )

}

export default Widget