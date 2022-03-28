import { TextProps } from "../../constants/types/components_props/types"

export const Text = ( {blockchainResponse}: TextProps ) =>
{

    return (
      
        <div className={` ${blockchainResponse ? "text__container" : null} ${blockchainResponse?.error ? "error" : null} `}>

            <p className='text-error'>
                {blockchainResponse ? blockchainResponse.error : null}
            </p>

            <p className="text-title">
                {blockchainResponse ? blockchainResponse.addressTitle : null}
            </p>

            <p className="text-address">
                {blockchainResponse ? blockchainResponse.address : null}
            </p>

            <p className="text-balance--title">
                {blockchainResponse ? blockchainResponse.balanceTitle : null}
            </p>

            <p className="text-balance--value">
                {blockchainResponse ? blockchainResponse.balance : null}
            </p>

        </div>
    )
    
}