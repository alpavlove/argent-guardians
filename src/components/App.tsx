import { isAddress } from '@ethersproject/address'
import { useEtherBalance } from '@usedapp/core'
import React, { useCallback, useState } from 'react'

import { useAvailableTokens, useGetGuardianCount } from '../hooks'

import { AvailableTokens } from './AvailableTokens'
import { EtherBalance } from './EtherBalance'
import { GuardiansCount } from './GuardiansCount'
import { WalletAddress } from './WalletAddress'

export function App() {
  const [walletAddress, setWalletAddress] = useState('')
  const etherBalance = useEtherBalance(walletAddress)
  const availableTokens = useAvailableTokens(walletAddress)
  const guardiansCount = useGetGuardianCount(walletAddress)

  const onChangeWalletAddress = useCallback((address: string) => {
    if (!isAddress(address)) {
      alert('Please enter valid address')
      return
    }

    setWalletAddress(address)
  }, [])

  return (
    <div className="App">
      <WalletAddress walletAddress={walletAddress} onChangeWalletAddress={onChangeWalletAddress} />

      <main>
        {etherBalance && <EtherBalance balance={etherBalance} />}
        {!!guardiansCount && Number.isInteger(guardiansCount) && (
          <GuardiansCount count={guardiansCount} />
        )}
        {availableTokens[0] && <AvailableTokens availableTokens={availableTokens} />}
      </main>
    </div>
  )
}
