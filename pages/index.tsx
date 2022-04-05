import type { NextPage } from 'next'
import Head from 'next/head'
import { useState } from 'react'
import { Button } from '../app/components/button/Button'
import { Gallery } from '../app/components/gallery/Gallery'
import { Input } from '../app/components/input/Input'
import { Navbar } from '../app/components/structure/header/Navbar'
import { TagFilter } from '../app/components/tag_filter/TagFilter'
import { Text } from '../app/components/text/Text'
import { HOME_HEAD } from '../app/constants/seo/homeHead'
import { _getAlgorandAddressBalance, _getEthereumAddressBalance, _getSolanaAddressBalance, _getTerraAddressBalance } from '../app/services/balance.service'
import { validateNft, _getNfts } from '../app/services/nft.service'
import { accessMetamaskWallet, accessPhantomWallet } from '../app/services/wallet.service'


const Home: NextPage = () => {

  const BLOCKCHAIN_ADRESSES: string[] = ['ethereum', 'solana', 'terra', 'algorand']
  const BLOCKCHAIN_WALLETS: string[] = ['ethereum', 'solana']
  const NFT_WALLETS: string[] = ['ethereum']
  const [selectedBlockchain, setSelectedBlockchain] = useState<string>('')
  const [inputAddress, setInputAddress] = useState<string>('')
  const [addressData, setAddressData] = useState<any>('')
  const [nftAddress, setNftAddress] = useState<string>('')
  const [mode, setMode] =  useState<string>('block-explorer')
  const [nfts, setNfts] = useState<[Object]>([{}])

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

  const accessNfts = async (address: string, blockchain: string): Promise<any> => 
  {
    validateNft(address, blockchain, setNfts, setAddressData)
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

        <section className='nft-explorer'>
            
            <TagFilter tagsData={NFT_WALLETS} setSelectedBlockchain={setSelectedBlockchain} dropdownTitle={selectedBlockchain} />
            <Input setInputAddress={setNftAddress} placeholder={selectedBlockchain} blockchainResponse={addressData}/>
            <Button text='View nfts' handleClick={() => accessNfts(nftAddress, selectedBlockchain)} />
            <Text blockchainResponse={addressData} />
            <Gallery galleryData={nfts}/>

        </section>
        
      </main>


    </>
  )
}

export default Home
