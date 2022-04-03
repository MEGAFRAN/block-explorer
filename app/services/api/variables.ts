export const API_TEST =
{
    url: process.env.TEST_API || process.env.NEXT_PUBLIC_TEST_API,
    endpoint: process.env.TEST_API_ENDPOINT || process.env.NEXT_PUBLIC_TEST_API_ENDPOINT
}

export const INFURA =
{
    url: process.env.INFURA_API || process.env.NEXT_PUBLIC_INFURA_API !,
    id: process.env.INFURA_ID || process.env.NEXT_PUBLIC_INFURA_ID !
}

export const TERRA =
{
    url: process.env.TERRA_URL || process.env.NEXT_PUBLIC_TERRA_URL !,
    chainId: process.env.TERRA_CHAIN_ID || process.env.NEXT_PUBLIC_TERRA_CHAIN_ID !
}

export const ALGORAND =
{
    url: process.env.ALGORAND_API || process.env.NEXT_PUBLIC_ALGORAND_API,
    endpoint: process.env.ALGORAND_API_ENDPOINT || process.env.NEXT_PUBLIC_ALGORAND_API_ENDPOINT
}