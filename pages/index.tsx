import type { NextPage } from 'next'
import { useState } from 'react'
import { Button } from '../app/components/button/Button'
import { Input } from '../app/components/input/Input'
import { TagFilter } from '../app/components/tag_filter/TagFilter'
import { Text } from '../app/components/text/Text'
import { _getEthereumAddressBalance, _getSolanaAddressBalance, _getTerraAddressBalance } from '../app/services/blockchain.service'


const Home: NextPage = () => {

  const BLOCKCHAIN_LIST: string[] = ['ethereum', 'solana', 'terra']
  const [selectedBlockchain, setSelectedBlockchain] = useState<string>('')
  const [inputAddress, setInputAddress] = useState<string>('')
  const [addressData, setAddressData] = useState<any>('Here will go the info')

  const address = '0x2ba0A01333b3612d2f22Ff003E4401bf65d01743'

  const getAddressBalance = (selectedBlockchain: string): void =>
  {
    selectedBlockchain === "ethereum" ? _getEthereumAddressBalance(setAddressData, inputAddress) :
    selectedBlockchain === "solana" ? _getSolanaAddressBalance(setAddressData, inputAddress) : 
    selectedBlockchain === "terra" ? _getTerraAddressBalance(setAddressData, inputAddress) : null
  }

  return (

    <main>

      <TagFilter tagsData={BLOCKCHAIN_LIST} setSelectedBlockchain={ setSelectedBlockchain }/>
      <Input setInputAddress={ setInputAddress}/>
      <Button handleClick={()=> getAddressBalance(selectedBlockchain) }/>
      <Text />

      {addressData}
      
    </main>
    
  )
}

export default Home
