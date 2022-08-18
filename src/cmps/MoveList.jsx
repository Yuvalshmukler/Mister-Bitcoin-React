import React from 'react'
import MovePreview from './MovePreview'
export default function MoveList({ moves, title }) {
    if(!moves || !moves.length) return <div>No transfers yet</div>
    return (
        <section className='list-container'>
            <h3>{title}</h3>
            <div className='move-list'>
                {moves.map(move => <MovePreview key={move.at} move={move} ></MovePreview>)}
            </div>
        </section>
    )
}
