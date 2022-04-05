import { addressValidator } from "../utils/address-validator"

export const _getNfts = async (address: string): Promise<any> => 
{

    let data = await fetch(`https://testnets-api.opensea.io/api/v1/assets?owner=${address}&order_direction=desc&offset=0&limit=50`)
    .then((res) => res.json())
    .then((res) => res.assets)

    return data
    
}

export const validateNft = async (address: string, blockchain: string, setNfts: any, setAddressData: any): Promise<any> =>
{
    if (address)
    { 
      addressValidator(true, false, setAddressData)

      if (blockchain === 'ethereum')
      {
        let data:[any] = await _getNfts(address)
        setNfts(data)
    
        return data
      }
      else if (!blockchain)
      {
        alert('Please select a blockchain network')

        return
      }      

      return alert(`The app still doesn't have integration with ${blockchain} nfts`)
    }

    return addressValidator(false, false, setAddressData)
}