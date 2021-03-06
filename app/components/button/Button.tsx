


export const Button = ({ text='', handleClick, style='', alignment='', size='' }: any) => {

  return (

    <div className={`button__container ${style}${alignment}${size}`}>

      <button onClick={handleClick}>

        {text}

      </button>  

    </div>
    
  )

}