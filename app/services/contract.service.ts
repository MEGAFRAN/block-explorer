import { ethers } from "ethers";
import { Dispatch } from "react";
import { CLIENT_RENEG_LIMIT } from "tls";
import { addressValidator } from "../utils/address-validator";
import { INFURA } from "./api/variables";



const CONTRACT_ABI: string[] = [
    'function name() view returns (string)',
    'function symbol() view returns (string)',
    'function decimals() view returns (uint8)',
    'function totalSupply() view returns (uint256)',
    'function balanceOf(address) view returns (uint)'
]



const activateProvider = () => new ethers.providers.JsonRpcProvider(INFURA.url + INFURA.id)

export const validateContractData = async ( contractAddress: string,
                                            setAddressData: Dispatch<any> ): Promise<any> =>
{

    try
    {
        const contract = new ethers.Contract(contractAddress, CONTRACT_ABI, activateProvider())
        const name = await contract.name()
        const symbol = await contract.symbol()
        const totalSupply = ethers.utils.formatEther( await contract.totalSupply() )

        const contractResponse = { 
            name: `Smart contract name: ${name}`, 
            symbol: `Symbol: ${symbol}`, 
            totalSupply: `Has a total supply of: ${totalSupply} ${symbol}` }

        setAddressData(contractResponse)

        return contractResponse

    } catch (error)
    {
        console.error(error)
        addressValidator(false, false, setAddressData)
    }

} 



