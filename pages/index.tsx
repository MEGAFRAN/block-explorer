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

  const BLOCKCHAIN_LIST: string[] = ['ethereum', 'solana', 'terra', 'algorand']
  const [selectedBlockchain, setSelectedBlockchain] = useState<string>('')
  const [inputAddress, setInputAddress] = useState<string>('')
  const [addressData, setAddressData] = useState<any>('')
  const [mode, setMode] =  useState<string>('BlockExplorer')

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

      <Navbar setMode={()=> setMode}/>

      <main>

        <section className={`block-explorer ${mode === 'BlockExplorer' ? '' : 'hidden'}`}>

          <TagFilter tagsData={BLOCKCHAIN_LIST} setSelectedBlockchain={setSelectedBlockchain} dropdownTitle={selectedBlockchain}/>
          <Input setInputAddress={setInputAddress} placeholder={selectedBlockchain} blockchainResponse={addressData}/>
          <Button text='Search Address' handleClick={()=> getAddressBalance(selectedBlockchain) }/>
          <Text blockchainResponse={addressData} />

        </section>
        
        <section className={`wallet-explorer ${mode === 'WalletExplorer' ? '' : 'hidden'}`} >
            
          <TagFilter tagsData={BLOCKCHAIN_LIST} setSelectedBlockchain={setSelectedBlockchain} dropdownTitle={selectedBlockchain} />
          <Button text='Access Wallet' handleClick={() => accessWallet(selectedBlockchain)} />
            
        </section>
        
      </main>


    </>
  )
}

export default Home
