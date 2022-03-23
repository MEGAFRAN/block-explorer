import { ethers } from "ethers";
import { Dispatch } from "react";
import { INFURA } from "./api/variables";

//ETHEREUM VARIABLES
const PROVIDER = new ethers.providers.JsonRpcProvider(`https://mainnet.infura.io/v3/${INFURA.id}`)

//ETHEREUM ADDRESS
export const _getEthereumAddressBalance = async (setAddressData: Dispatch<any>, address: string): Promise<any> =>
{
  try
  {
    const addressBalance = await PROVIDER.getBalance(address)
    const ethereumAddressMessage = `ETH Balance of ${address} is: ${ethers.utils.formatEther(addressBalance)} ETH`
    setAddressData(ethereumAddressMessage)
    
    return addressBalance
  }
  catch (error)
  {
    console.error(error)
  }
}