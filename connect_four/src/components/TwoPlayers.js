import React from 'react'
import './TwoPlayers.css'

const TwoPlayers = () => {
    
    return (<>
        <div>
            <div className="item-player"><h4>{'Contine Current Game'}</h4></div>
            <div className='element'>
                <div className="item-player-icon"><h2>P-1</h2></div>
                <div className="item-player-name"><h2>{'Name-1'}</h2></div>
            </div>
            <div className='element'>
                <div className="item-player-icon"><h2>P-2</h2></div>
                <div className="item-player-name"><h2>{'Name-1'}</h2></div>
            </div>
            <div className="item-player"><h4>{'Number Of Wins : 5'}</h4></div>
            <div className="item-player"><h4>{'Who starts : Alternative turn'}</h4></div>
            <div className="item-player-t"><h3>{'Start New Game'}</h3></div>
        </div>
    </>)
}
export default TwoPlayers;