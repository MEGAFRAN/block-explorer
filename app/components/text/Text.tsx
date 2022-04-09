import { TextProps } from "../../constants/types/components_props/types"

export const Text = ( {blockchainResponse}: TextProps ) =>
{

    const textFields = Object.entries(blockchainResponse).map(([key, data], index) => (

        <p key={index}>

            {data}

        </p>
    
    ))

    return (
      
        <div className={`${blockchainResponse ? "text__container" : ''} ${blockchainResponse?.error ? "error" : ''}`}>

            <p className='text-error'>
                {blockchainResponse ? blockchainResponse.error : null}
            </p>

            { !blockchainResponse.error ? textFields : null}

        </div>
    )
    
}