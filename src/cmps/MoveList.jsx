import React from 'react'
import MovePreview from './MovePreview'
export default function MoveList({ moves, title }) {
    if(!moves || !moves.length) return <div>No transfers yet</div>
    return (
        <section>
            <h2>{title}</h2>
            <div className='move-list simple-cards-grid'>
                {moves.map(move => <MovePreview key={move.at} move={move} ></MovePreview>)}
            </div>
        </section>
    )
}
