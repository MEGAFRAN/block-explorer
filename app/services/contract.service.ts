import { ethers } from "ethers";
import { INFURA } from "./api/variables";



const CONTRACT_ABI: string[] = [
    'function name() view returns (string)',
    'function symbol() view returns (string)',
    'function totalSupply() view returns (uint256)',
    'function balanceOf(address) view returns (uint)'
]



const activateProvider = () => new ethers.providers.JsonRpcProvider(INFURA.url + INFURA.id)

export const validateContractData = async ( contractAddress: string,
                                            contractAbi: string[] = CONTRACT_ABI,
                                            provider: ethers.providers.JsonRpcProvider = activateProvider() ): Promise<void> =>
{

    try
    {
        const contract = new ethers.Contract(contractAddress, contractAbi, provider)
        const name = await contract.name()
        const symbol = await contract.symbol()
        const totalSupply = ethers.utils.formatEther( await contract.totalSupply() )
        console.log(name, symbol, totalSupply)

    } catch (error)
    {
        console.error(error)
    }

} 



