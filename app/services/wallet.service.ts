declare const window: Window & typeof globalThis &
{
    ethereum: any,
    solana: any
}

export const accessMetamaskWallet = ():void =>
{
    if (window.ethereum !== undefined)
    {
        window.ethereum.request({ method: 'eth_requestAccounts' })

        return
    }

    return alert("please install metamask wallet")
}


export const accessPhantomWallet = ():void =>
{
    if (window.solana.connect)
    {
        window.solana.connect
        window.solana.request({ method: 'connect' })
        
        return
    }

    return alert("please install phantom wallet")
}

export const validateWallet = (selectedBlockchain: string): void =>
{
    selectedBlockchain === "ethereum" ? accessMetamaskWallet() :
    selectedBlockchain === "solana" ? accessPhantomWallet() : null
}