export const API_TEST =
{
    url: process.env.TEST_API || process.env.NEXT_PUBLIC_TEST_API,
    endpoint: process.env.TEST_API_ENDPOINT || process.env.NEXT_PUBLIC_TEST_API_ENDPOINT
}

export const INFURA =
{
    id: process.env.INFURA_ID || process.env.NEXT_PUBLIC_INFURA_ID
}