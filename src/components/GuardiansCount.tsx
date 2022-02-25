import React from 'react'

type Props = {
  count: number
}

export function GuardiansCount({ count }: Props) {
  return (
    <div className="Balance">
      <div className="Balance-title">Number of guardians:</div>
      <div className="Balance-value">{count}</div>
    </div>
  )
}
