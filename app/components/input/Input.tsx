

export const Input = ( {inputData, setInputAddress}: any ) => 
{
    return (

        <div className="input-container">
            <input value={inputData} onChange={event => setInputAddress(event.target.value)}/>
        </div>  
    )
}
      
