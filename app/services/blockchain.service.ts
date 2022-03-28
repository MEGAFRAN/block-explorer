import { Dispatch } from "react";
import { ethers } from "ethers";
import { INFURA } from "./api/variables";
import { PublicKey, Connection, clusterApiUrl } from "@solana/web3.js";
import { LCDClient } from '@terra-money/terra.js';
import serviceObject from "./utils/service-object";
import { algorandService } from "./service_objects/algorand";
 
const ADDRESS_ERROR_MESSAGE = 'Error: Please verify that the specified address is valid in the selected blockchain'

//ETHEREUM ADDRESS
export const _getEthereumAddressBalance = async (setAddressData: Dispatch<any>, address: string): Promise<any> =>
{
  try
  {
    const ETHEREUM_CLIENT = new ethers.providers.JsonRpcProvider(`https://mainnet.infura.io/v3/${INFURA.id}`)
    const addressBalance = await ETHEREUM_CLIENT.getBalance(address)
    const ethereumResponse = {
      addressTitle: 'ETH address #',
      address: `${address}`,
      balanceTitle: 'Has a balance of :',
      balance: `${ethers.utils.formatEther(addressBalance)} ETH`
    } 
    setAddressData(ethereumResponse)
    
    return ethereumResponse
  }
  catch (error)
  {
    console.error(error)
    setAddressData({ error: ADDRESS_ERROR_MESSAGE })
  }
}

//SOLANA ADDRESS
export const _getSolanaAddressBalance = async (setAddressData: Dispatch<any>, address: string): Promise<any> =>
{
  try
  {
    const SOLANA_CLIENT = new Connection(clusterApiUrl('devnet'),'confirmed')
    const addressBalance = await SOLANA_CLIENT.getBalance( new PublicKey(address) )
    const solanaResponse = {
      addressTitle: 'Solana address #',
      address: `${address}`,
      balanceTitle: 'Has a balance of :',
      balance: `${addressBalance} SOL`
    } 
    setAddressData(solanaResponse)
    
    return solanaResponse
  }
  catch (error)
  {
    const solanaResponse = {
      error: ADDRESS_ERROR_MESSAGE
    } 
    console.error(error)
    setAddressData(solanaResponse)
  }
}

//TERRA ADDRESS
export const _getTerraAddressBalance = async (setAddressData: Dispatch<any>, address: string): Promise<any> =>
{
  try
  {
    const TERRA_CLIENT = new LCDClient({URL: 'https://bombay-lcd.terra.dev', chainID: 'bombay-12'})
    const [addressBalance] = await TERRA_CLIENT.bank.balance(address)
    const terraResponse = {
      addressTitle: 'Terra address #',
      address: `${address}`,
      balanceTitle: 'Has a balance of :',
      balance: `${JSON.stringify(addressBalance.toData())}`
    } 
    //Method that terra documentation uses:  addressBalance.toData()
    setAddressData(terraResponse)
    
    return terraResponse
  }
  catch (error)
  {
    console.error(error)
    setAddressData({ error: ADDRESS_ERROR_MESSAGE })
  }
}

//ALGORAND ADDRESS
export const _getAlgorandAddressBalance = async (setAddressData: Dispatch<any>, address: string): Promise<any> =>
{
  try
  {
    let responseData = await serviceObject.getSingleData(algorandService, address)
    const algorandResponse = {
      addressTitle: 'Algorand address #',
      address: `${address}`,
      balanceTitle: 'Has a balance of :',
      balance: `${responseData.account.amount} ALGO`
    } 

    setAddressData(algorandResponse)
    
    return algorandResponse
  }
  catch (error)
  {
    console.error(error)
    setAddressData({ error: ADDRESS_ERROR_MESSAGE })
  }
}