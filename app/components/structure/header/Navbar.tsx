export const Navbar = ({ setMode }: any) =>
{

    const options = ['block-explorer', 'wallet-explorer', 'nft-explorer', 'contract-explorer']

    let optionsList = options.map((option: string) => (

        <div tabIndex={0} key={option}>

            <input id={option} type="radio" name="options" 
            onChange={event => setMode(event.target.id)} /> 
            
            <label htmlFor={option}>{option}</label>
            
        </div>
    ))

    return (        

        <>
            <div className='navBar'>

                <a href="./"><h1 className='blockvista-name'>BlockVista</h1></a>

            </div> 

            <div className='options'>

                {options ? optionsList : null}   

            </div>
        </>
            
    )

}