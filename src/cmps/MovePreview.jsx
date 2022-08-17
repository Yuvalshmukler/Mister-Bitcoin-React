import React from 'react'

export default function MovePreview({move}) {
  return (
    <div>
        <h4>To:{move.to}</h4>
        <h3>At:{move.at}</h3>
        <h4>Amount:{move.amount}</h4>
    </div>
  )
}
