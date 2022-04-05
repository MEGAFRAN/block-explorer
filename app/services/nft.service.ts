export const _getNfts = async (address: string): Promise<any> => 
{

    let data = await fetch(`https://testnets-api.opensea.io/api/v1/assets?owner=${address}&order_direction=desc&offset=0&limit=50`)
    .then((res) => res.json())
    .then((res) => res.assets)

    return data
    
}