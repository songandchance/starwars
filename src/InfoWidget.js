import React from 'react'
import './App.css'

const InfoWidget = props => {
    const { data } = props

    if (!data) {
        return (
            <div className="content-div">Click on a name to see stats</div>
        )
    }
    const cardContents = data => {
        const contents = data.map((filmName) => 
             <div>{filmName}</div>
        )
        return contents
    }

    const getFilmTitles = urlArray => {
        let titles = []
        const films = {'https://swapi.dev/api/films/1/': 'A New Hope',
        'https://swapi.dev/api/films/2/': 'The Empire Strikes Back',
        'https://swapi.dev/api/films/3/': 'Return of the Jedi',
        'https://swapi.dev/api/films/4/': 'The Phantom Menace',
        'https://swapi.dev/api/films/5/': 'Attack of the Clones',
        'https://swapi.dev/api/films/6/': 'Revenge of the Sith'}
        for (let i = 0; i < urlArray.length; i++) {
            titles.push(films[urlArray[i]])
        }
        return titles
    }

    return (
        <div className="content-div">
            <div className='character-list'>
                <span className='category'>Name: </span>{data.name}
            </div>
            <div className='character-list'>
            <span className='category'>Birth year: </span>{data.birth_year}

            </div>
            <div className='character-list'>
                <span className='category'>Films appeared:</span>
                <div>{cardContents(getFilmTitles(data.films))}</div>
            </div>
        </div>

    )
}

export default InfoWidget