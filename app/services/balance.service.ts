import { Dispatch } from "react";
import { ethers } from "ethers";
import { INFURA, TERRA } from "./api/variables";
import { PublicKey, Connection, clusterApiUrl } from "@solana/web3.js";
import { LCDClient } from '@terra-money/terra.js';
import serviceObject from "./utils/service-object";
import { algorandService } from "./service_objects/algorand";
import { addressValidator } from "../utils/address-validator";
 
//ETHEREUM ADDRESS
const _getEthereumAddressBalance = async (setAddressData: Dispatch<any>, address: string): Promise<any> =>
{
  try
  {
    const ETHEREUM_CLIENT = new ethers.providers.JsonRpcProvider(INFURA.url + INFURA.id)
    const addressBalance = await ETHEREUM_CLIENT.getBalance(address)
    const ethereumResponse = {
      addressTitle: 'ETH address #',
      address: address,
      balanceTitle: 'Has a balance of :',
      balance: `${ethers.utils.formatEther(addressBalance)} ETH`
    } 
    setAddressData(ethereumResponse)
 
    return ethereumResponse
  }
  catch (error)
  {
    console.error(error)
    addressValidator(false, false, setAddressData)
  }
}

//SOLANA ADDRESS
const _getSolanaAddressBalance = async (setAddressData: Dispatch<any>, address: string): Promise<any> =>
{
  try
  {
    const SOLANA_CLIENT = new Connection(clusterApiUrl('devnet'),'confirmed')
    const addressBalance = await SOLANA_CLIENT.getBalance( new PublicKey(address) )
    const solanaResponse = {
      addressTitle: 'Solana address #',
      address: address,
      balanceTitle: 'Has a balance of :',
      balance: `${addressBalance} SOL`
    } 
    setAddressData(solanaResponse)
    
    return solanaResponse
  }
  catch (error)
  {
    console.error(error)
    addressValidator(false, false, setAddressData)
  }
}

//TERRA ADDRESS
const _getTerraAddressBalance = async (setAddressData: Dispatch<any>, address: string): Promise<any> =>
{
  try
  {
    const TERRA_CLIENT = new LCDClient({URL: TERRA.url, chainID: TERRA.chainId})
    const [addressBalance] = await TERRA_CLIENT.bank.balance(address)
    const addressBalanceToString = addressBalance. map(item => {
      return `${item.denom}:${item.amount}/ `
    })
    const terraResponse = {
      addressTitle: 'Terra address #',
      address: address,
      balanceTitle: 'Has a balance of :',
      balance: addressBalanceToString
    } 
    setAddressData(terraResponse)
    
    return terraResponse
  }
  catch (error)
  {
    console.error(error)
    addressValidator(false, false, setAddressData)
  }
}

//ALGORAND ADDRESS
const _getAlgorandAddressBalance = async (setAddressData: Dispatch<any>, address: string): Promise<any> =>
{
  try
  {
    let responseData = await serviceObject.getSingleData(algorandService, address)
    const algorandResponse = {
      addressTitle: 'Algorand address #',
      address: address,
      balanceTitle: 'Has a balance of :',
      balance: `${responseData.account.amount} ALGO`
    } 
    setAddressData(algorandResponse)
    
    return algorandResponse
  }
  catch (error)
  {
    console.error(error)
    addressValidator(false, false, setAddressData)
  }
}

const BLOCKCHAINS_INFO: {name:string, getBalanceMethod:any}[] = [
  { name: "ethereum", getBalanceMethod: _getEthereumAddressBalance },
  { name: "solana", getBalanceMethod: _getSolanaAddressBalance },
  { name: "terra", getBalanceMethod: _getTerraAddressBalance },
  { name: "algorand", getBalanceMethod: _getAlgorandAddressBalance }
]


export const validateBalance = (selectedBlockchain: string, setAddressData: any, inputAddress: any): void =>
{

  try
  {
    const blockchain = BLOCKCHAINS_INFO.find(token => selectedBlockchain === token.name)
    blockchain?.getBalanceMethod(setAddressData, inputAddress)

  } catch (error)
  {
    console.error(error)
  }

}