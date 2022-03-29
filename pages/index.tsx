import type { NextPage } from 'next'
import Head from 'next/head'
import { useState } from 'react'
import { Button } from '../app/components/button/Button'
import { Input } from '../app/components/input/Input'
import { TagFilter } from '../app/components/tag_filter/TagFilter'
import { Text } from '../app/components/text/Text'
import { HOME_HEADER } from '../app/constants/seo/homeHeader'
import { _getAlgorandAddressBalance, _getEthereumAddressBalance, _getSolanaAddressBalance, _getTerraAddressBalance } from '../app/services/blockchain.service'


const Home: NextPage = () => {

  const BLOCKCHAIN_LIST: string[] = ['ethereum', 'solana', 'terra', 'algorand']
  const [selectedBlockchain, setSelectedBlockchain] = useState<string>('')
  const [inputAddress, setInputAddress] = useState<string>('')
  const [addressData, setAddressData] = useState<any>('')

  const getAddressBalance = (selectedBlockchain: string): void =>
  {
    selectedBlockchain === "ethereum" ? _getEthereumAddressBalance(setAddressData, inputAddress) :
    selectedBlockchain === "solana" ? _getSolanaAddressBalance(setAddressData, inputAddress) : 
    selectedBlockchain === "terra" ? _getTerraAddressBalance(setAddressData, inputAddress) :
    selectedBlockchain === "algorand" ? _getAlgorandAddressBalance(setAddressData, inputAddress) : null
  }

  return (
    <>
      <Head>{HOME_HEADER}</Head>

      <a href="./" ><h1 className='blockvista-name'>BlockVista</h1></a>

      <main>

        <TagFilter tagsData={BLOCKCHAIN_LIST} setSelectedBlockchain={setSelectedBlockchain} dropdownTitle={selectedBlockchain}/>
        <Input setInputAddress={setInputAddress} placeholder={selectedBlockchain} blockchainResponse={addressData}/>
        <Button handleClick={()=> getAddressBalance(selectedBlockchain) }/>
        <Text blockchainResponse={addressData} />
        
      </main>

    </>
  )
}

export default Home
