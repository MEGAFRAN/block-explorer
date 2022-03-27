import { TextProps } from "../../constants/types/components_props/types"

export const Text = ( {alignment, blockchainResponse}: TextProps ) =>
{

    return (
      
        <div className="text__container">

            <p>
                {blockchainResponse ? blockchainResponse.address : ''}
            </p>

            <p style={ { textAlign: alignment } }>

                
                {blockchainResponse ? blockchainResponse.balance : ''}

            </p>
        </div>
    )
    
}