import { Dispatch } from "react";
import { ethers } from "ethers";
import * as solanaWeb3 from '@solana/web3.js';
import { INFURA } from "./api/variables";
import { PublicKey } from "@solana/web3.js";
import { LCDClient } from '@terra-money/terra.js';

  // (Fix): the way addressBalance it's shown on the page on mobile ////////////
  

//ETHEREUM ADDRESS
export const _getEthereumAddressBalance = async (setAddressData: Dispatch<any>, address: string): Promise<any> =>
{
  try
  {
    const ETHEREUM_CLIENT = new ethers.providers.JsonRpcProvider(`https://mainnet.infura.io/v3/${INFURA.id}`)
    const addressBalance = await ETHEREUM_CLIENT.getBalance(address)
    const ethereumAddressMessage = `ETH Balance of address # ${address} is: ${ethers.utils.formatEther(addressBalance)} ETH`
    setAddressData(ethereumAddressMessage)
    
    return addressBalance
  }
  catch (error)
  {
    console.error(error)
  }
}

//SOLANA ADDRESS
export const _getSolanaAddressBalance = async (setAddressData: Dispatch<any>, address: string): Promise<any> =>
{
  try
  {
    const SOLANA_CLIENT = new solanaWeb3.Connection(solanaWeb3.clusterApiUrl('devnet'),'confirmed')
    const addressBalance = await SOLANA_CLIENT.getBalance( new PublicKey(address) )
    const solanaAddressMessage = `Solana Balance of address # ${address} is: ${addressBalance} SOL`
    setAddressData(solanaAddressMessage)
    
    return addressBalance
  }
  catch (error)
  {
    console.error(error)
  }
}

//TERRA ADDRESS
export const _getTerraAddressBalance = async (setAddressData: Dispatch<any>, address: string): Promise<any> =>
{
  try
  {
    const TERRA_CLIENT = new LCDClient({URL: 'https://bombay-lcd.terra.dev', chainID: 'bombay-12'})
    const [addressBalance] = await TERRA_CLIENT.bank.balance(address)
    const terraAddressMessage = `Terra Balance of address # ${address} is: ${JSON.stringify(addressBalance.toData())}`
    //Method that terra documentation uses:  addressBalance.toData()
    setAddressData(terraAddressMessage)
    
    return addressBalance
  }
  catch (error)
  {
    console.error(error)
  }
}