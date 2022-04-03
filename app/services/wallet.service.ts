declare const window: Window & typeof globalThis &
{
    ethereum: any,
    solana: any
}

export const accessMetamaskWallet = ():void =>
{
    if (window.ethereum ==! undefined)
    {
        window.ethereum.request({ method: 'eth_requestAccounts' })
    }
    else
    {
        alert("please install metamask wallet")
    }

}


export const accessPhantomWallet = ():void =>
{
    if (window.solana ==! undefined)
    {
        window.solana.connect
        window.solana.request({method:'connect'})
    }
    else
    {
        alert("please install phantom wallet")
    }

}
