import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import { Button } from '../app/components/button/Button'
import { Gallery } from '../app/components/gallery/Gallery'
import { Input } from '../app/components/input/Input'
import { Navbar } from '../app/components/structure/header/Navbar'
import { TagFilter } from '../app/components/tag_filter/TagFilter'
import { Text } from '../app/components/text/Text'
import { HOME_HEAD } from '../app/constants/seo/homeHead'
import { validateBalance} from '../app/services/balance.service'
import { validateContractData } from '../app/services/contract.service'
import { validateNft } from '../app/services/nft.service'
import { validateWallet } from '../app/services/wallet.service'


const Home: NextPage = () => {

  const BLOCKCHAIN_ADRESSES: string[] = ['ethereum', 'solana', 'terra', 'algorand']
  const BLOCKCHAIN_WALLETS: string[] = ['ethereum', 'solana']
  const NFT_WALLETS: string[] = ['ethereum']
  const SMART_CONTRACTS: string[] = ['ethereum']
  const [selectedBlockchain, setSelectedBlockchain] = useState<string>('')
  const [inputAddress, setInputAddress] = useState<string>('')
  const [addressData, setAddressData] = useState<any>('')
  const [nftAddress, setNftAddress] = useState<string>('')
  const [mode, setMode] =  useState<string>('block-explorer')
  const [nfts, setNfts] = useState<[Object]>([{}])


  const accessAddressBalance = (selectedBlockchain: string): void => validateBalance(selectedBlockchain, setAddressData, inputAddress)
  
  const accessWallet = (selectedBlockchain: string): void => validateWallet(selectedBlockchain)
  
  const accessNfts = async (address: string, blockchain: string): Promise<any> => validateNft(address, blockchain, setNfts, setAddressData)

  const accessContractData = async (address: string): Promise<any> => validateContractData(address, setAddressData)

  useEffect(() => 
  {
    
    setSelectedBlockchain('')
    setInputAddress('')
    setAddressData('')

  }, [mode])
  

  return (

    <>
      
      <Head>{HOME_HEAD}</Head>

      <Navbar setMode={setMode}/>

      <main className={mode}>

        <section className='block-explorer'>

          <TagFilter tagsData={BLOCKCHAIN_ADRESSES} setSelectedBlockchain={setSelectedBlockchain} dropdownTitle={selectedBlockchain} mode='block'/>
          <Input setInputAddress={setInputAddress} placeholder={selectedBlockchain} blockchainResponse={addressData}/>
          <Button text='Search Address' handleClick={()=> accessAddressBalance(selectedBlockchain) }/>
          <Text blockchainResponse={addressData} />

        </section>
        
        <section className='wallet-explorer'>
            
          <TagFilter tagsData={BLOCKCHAIN_WALLETS} setSelectedBlockchain={setSelectedBlockchain} dropdownTitle={selectedBlockchain} mode='wallet'/>
          <Button text='Access Wallet' handleClick={() => accessWallet(selectedBlockchain)} />
            
        </section>

        <section className='nft-explorer'>
            
          <TagFilter tagsData={NFT_WALLETS} setSelectedBlockchain={setSelectedBlockchain} dropdownTitle={selectedBlockchain} mode='nft'/>
          <Input setInputAddress={setNftAddress} placeholder={selectedBlockchain} blockchainResponse={addressData}/>
          <Button text='View nfts' handleClick={() => accessNfts(nftAddress, selectedBlockchain)} />
          <Text blockchainResponse={addressData} />
          <Gallery galleryData={nfts}/>

        </section>

        <section className='contract-explorer'>

          <TagFilter tagsData={SMART_CONTRACTS} setSelectedBlockchain={setSelectedBlockchain} dropdownTitle={selectedBlockchain} mode='contract'/>
          <Input setInputAddress={setInputAddress} placeholder={selectedBlockchain} blockchainResponse={addressData}/>
          <Button text='View smart contract' handleClick={() => accessContractData(inputAddress)} />
          <Text blockchainResponse={addressData} />

        </section>
        
      </main>

    </>

  )

}

export default Home
