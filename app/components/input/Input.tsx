

export const Input = ( {inputData, setInputAddress, placeholder='Blockchain address'}: any ) => 
{
    return (

        <div className="input__container">

            <input value={inputData} onChange={event => setInputAddress(event.target.value)} placeholder={placeholder}/>

        </div>  
    )
}
      
