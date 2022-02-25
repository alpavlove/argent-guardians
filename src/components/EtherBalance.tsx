import { BigNumber } from '@ethersproject/bignumber'
import { formatEther } from '@ethersproject/units'
import React from 'react'

type Props = {
  balance: BigNumber
}

export function EtherBalance({ balance }: Props) {
  return (
    <div className="Balance">
      <div className="Balance-title">Wallet Balance:</div>
      <div className="Balance-value">{formatEther(balance)} ETH</div>
    </div>
  )
}
