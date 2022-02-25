import React from 'react'

type Props = {
  availableTokens: { token: string; balance: string | undefined }[]
}

export function AvailableTokens({ availableTokens }: Props) {
  return (
    <div className="Balance">
      <div className="Balance-title">ERC 20 tokens:</div>
      <ul>
        {availableTokens.map(({ balance, token }) => (
          <li key={token} className="Balance-value">
            {token} {balance}
          </li>
        ))}
      </ul>
    </div>
  )
}
