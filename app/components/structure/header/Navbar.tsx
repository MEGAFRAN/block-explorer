export const Navbar = ({ setMode }: any) =>
{

    return (

        <>
            <div className='navBar'>
                <a href="./" ><h1 className='blockvista-name'>BlockVista</h1></a>
            </div> 
            <div className='options'>
                <span onClick={setMode('BlockExplorer')}>BlockExplorer</span>
                <span onClick={setMode('WalletExplorer')}>WalletExplorer</span>
            </div>
        </>
            
    )

}