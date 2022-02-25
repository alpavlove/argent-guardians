import { Config, DAppProvider, Mainnet } from '@usedapp/core'
import React from 'react'
import ReactDOM from 'react-dom'

import './index.css'
import { App } from './components/App'
import reportWebVitals from './reportWebVitals'

const config: Config = {
  readOnlyChainId: Mainnet.chainId,
  readOnlyUrls: {
    [Mainnet.chainId]: 'https://mainnet.infura.io/v3/7d0d81d0919f4f05b9ab6634be01ee73',
  },
}

ReactDOM.render(
  <React.StrictMode>
    <DAppProvider config={config}>
      <App />
    </DAppProvider>
  </React.StrictMode>,
  document.getElementById('root'),
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
