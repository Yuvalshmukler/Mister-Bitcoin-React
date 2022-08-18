import React from 'react'

export default function MovePreview({move}) {
  return (
    <div className='move-preivew'>
        <h4>To:  {move.to}</h4>
        <h4>At:  {move.at}</h4>
        <h4>Amount:  ${move.amount}</h4>
    </div>
  )
}
