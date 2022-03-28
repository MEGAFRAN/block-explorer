

export const Input = ( {inputData, setInputAddress, placeholder, blockchainResponse}: any ) => 
{
    return (

        <div className="input__container">

            <input className={` ${blockchainResponse?.error ? "error" : null} `}
                    value={inputData} onChange={event => setInputAddress(event.target.value)}
                    placeholder={placeholder ? `Enter ${placeholder} address` : 'Enter address'} />

        </div>  
    )
}
      
