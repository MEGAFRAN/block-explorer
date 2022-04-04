import type { NextPage } from 'next'
import Head from 'next/head'
import { useState } from 'react'
import { Button } from '../app/components/button/Button'
import { Input } from '../app/components/input/Input'
import { Navbar } from '../app/components/structure/header/Navbar'
import { TagFilter } from '../app/components/tag_filter/TagFilter'
import { Text } from '../app/components/text/Text'
import { HOME_HEAD } from '../app/constants/seo/homeHead'
import { _getAlgorandAddressBalance, _getEthereumAddressBalance, _getSolanaAddressBalance, _getTerraAddressBalance } from '../app/services/blockchain.service'
import { accessMetamaskWallet, accessPhantomWallet } from '../app/services/wallet.service'


const Home: NextPage = () => {

  const BLOCKCHAIN_ADRESSES: string[] = ['ethereum', 'solana', 'terra', 'algorand']
  const BLOCKCHAIN_WALLETS: string[] = ['ethereum', 'solana']
  const [selectedBlockchain, setSelectedBlockchain] = useState<string>('')
  const [inputAddress, setInputAddress] = useState<string>('')
  const [addressData, setAddressData] = useState<any>('')
  const [mode, setMode] =  useState<string>('block-explorer')

  const getAddressBalance = (selectedBlockchain: string): void =>
  {
    selectedBlockchain === "ethereum" ? _getEthereumAddressBalance(setAddressData, inputAddress) :
    selectedBlockchain === "solana" ? _getSolanaAddressBalance(setAddressData, inputAddress) : 
    selectedBlockchain === "terra" ? _getTerraAddressBalance(setAddressData, inputAddress) :
    selectedBlockchain === "algorand" ? _getAlgorandAddressBalance(setAddressData, inputAddress) : null
  }

  const accessWallet = (selectedBlockchain: string): void =>
  {
    selectedBlockchain === "ethereum" ? accessMetamaskWallet() :
    selectedBlockchain === "solana" ? accessPhantomWallet() : null
  }
  

  return (
    <>
      <Head>{HOME_HEAD}</Head>

      <Navbar setMode={setMode}/>

      <main className={mode}>

        <section className='block-explorer'>

          <TagFilter tagsData={BLOCKCHAIN_ADRESSES} setSelectedBlockchain={setSelectedBlockchain} dropdownTitle={selectedBlockchain}/>
          <Input setInputAddress={setInputAddress} placeholder={selectedBlockchain} blockchainResponse={addressData}/>
          <Button text='Search Address' handleClick={()=> getAddressBalance(selectedBlockchain) }/>
          <Text blockchainResponse={addressData} />

        </section>
        
        <section className='wallet-explorer'>
            
          <TagFilter tagsData={BLOCKCHAIN_WALLETS} setSelectedBlockchain={setSelectedBlockchain} dropdownTitle={selectedBlockchain} />
          <Button text='Access Wallet' handleClick={() => accessWallet(selectedBlockchain)} />
            
        </section>
        
      </main>


    </>
  )
}

export default Home
