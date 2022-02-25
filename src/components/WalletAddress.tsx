import React, { useCallback, useState } from 'react'

type WalletAddressProps = {
  walletAddress: string
  onChangeWalletAddress(value: string): void
}

export function WalletAddress({ walletAddress, onChangeWalletAddress }: WalletAddressProps) {
  const [newWalletAddress, setNewWalletAddress] = useState(walletAddress)

  const onSubmit = useCallback(() => {
    onChangeWalletAddress(newWalletAddress)
  }, [newWalletAddress, onChangeWalletAddress])

  return (
    <header className="WalletAddress">
      <div className="WalletAddress-caption">Enter your wallet address:</div>

      <div className="WalletAddress-controls">
        <input
          type="text"
          value={newWalletAddress}
          onChange={(event) => setNewWalletAddress(event.target.value)}
          className="WalletAddress-input"
        />

        <button
          onClick={onSubmit}
          className="WalletAddress-button"
          aria-label="Fetch info for the entered wallet address"
        >
          {'>>>'}
        </button>
      </div>
    </header>
  )
}
