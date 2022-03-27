

export const Input = ( {inputData, setInputAddress, placeholder}: any ) => 
{
    return (

        <div className="input__container">

            <input value={inputData} onChange={event => setInputAddress(event.target.value)}
                    placeholder={placeholder ? `Enter ${placeholder} address` : 'Enter address'} />

        </div>  
    )
}
      
