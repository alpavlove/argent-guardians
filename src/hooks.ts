import { BigNumber } from '@ethersproject/bignumber'
import { formatEther } from '@ethersproject/units'
import { ERC20Interface, useContractCalls, useTokenList } from '@usedapp/core'
import { ethers } from 'ethers'
import { useEffect, useMemo, useState } from 'react'

import { Guardians__factory } from './generated'

const { ethereum } = window

const uniswapTokenListUrl = 'https://gateway.ipfs.io/ipns/tokens.uniswap.org'
const guardiansContractAddress = '0xFF5A7299ff6f0fbAad9b38906b77d08c0FBdc9A7'

function useGuardiansContract() {
  return useMemo(() => {
    const provider = new ethers.providers.Web3Provider(ethereum)
    const signer = provider.getSigner()
    return Guardians__factory.connect(guardiansContractAddress, signer)
  }, [])
}

export function useAvailableTokens(address: string) {
  const { tokens = [] } = useTokenList(uniswapTokenListUrl) || {}

  const balances: (BigNumber[] | undefined)[] =
    useContractCalls(
      tokens.map((token) => {
        return {
          abi: ERC20Interface,
          address: token.address,
          method: 'balanceOf',
          args: [address],
        }
      }),
    ) ?? []

  return balances
    ?.map((item, index) => {
      const balance = item?.[0]

      return {
        token: tokens[index].symbol,
        balance: balance && !balance.isZero() ? formatEther(balance) : undefined,
      }
    })
    .filter((item) => item.balance)
}

export function useGetGuardianCount(address: string) {
  const [guardiansCount, setGuardiansCount] = useState<number | undefined>()
  const contract = useGuardiansContract()

  useEffect(() => {
    ;(async () => {
      const guardiansCountBigNumber = await contract.guardianCount(address)
      setGuardiansCount(guardiansCountBigNumber.toNumber())
    })()
  }, [address, contract])

  return guardiansCount
}
