import { ethers } from "ethers";
import * as solanaWeb3 from '@solana/web3.js';
import { Dispatch } from "react";
import { INFURA } from "./api/variables";
import { PublicKey } from "@solana/web3.js";


//SOLANA VARIABLES
const SOLANA_CLIENT = new solanaWeb3.Connection(solanaWeb3.clusterApiUrl('devnet'),'confirmed')

//ETHEREUM ADDRESS
export const _getEthereumAddressBalance = async (setAddressData: Dispatch<any>, address: string): Promise<any> =>
{
  try
  {
    const ETHEREUM_CLIENT = new ethers.providers.JsonRpcProvider(`https://mainnet.infura.io/v3/${INFURA.id}`)
    const addressBalance = await ETHEREUM_CLIENT.getBalance(address)
    const ethereumAddressMessage = `ETH Balance of ${address} is: ${ethers.utils.formatEther(addressBalance)} ETH`
    setAddressData(ethereumAddressMessage)
    
    return addressBalance
  }
  catch (error)
  {
    console.error(error)
  }
}

export const _getSolanaAddressBalance = async (setAddressData: Dispatch<any>, address: any): Promise<any> =>
{
  try
  {
    const SOLANA_CLIENT = new solanaWeb3.Connection(solanaWeb3.clusterApiUrl('devnet'),'confirmed')
    const addressBalance = await SOLANA_CLIENT.getBalance( new PublicKey(address) )
    const solanaAddressMessage = `Solana Balance of ${address} is: ${addressBalance} SOL`
    setAddressData(solanaAddressMessage)
    
    return addressBalance
  }
  catch (error)
  {
    console.error(error)
  }
}