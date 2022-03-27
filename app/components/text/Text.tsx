import { TextProps } from "../../constants/types/components_props/types"

export const Text = ( {blockchainResponse}: TextProps ) =>
{

    return (
      
        <div className={blockchainResponse ? "text__container" : ''}>

            <p className="text-title">
                {blockchainResponse ? blockchainResponse.addressTitle : ''}
            </p>

            <p className="text-address">
                {blockchainResponse ? blockchainResponse.address : ''}
            </p>

            <p className="text-balance--title">
                {blockchainResponse ? blockchainResponse.balanceTitle : ''}
            </p>

            <p className="text-balance--value">
                {blockchainResponse ? blockchainResponse.balance : ''}
            </p>
        </div>
    )
    
}