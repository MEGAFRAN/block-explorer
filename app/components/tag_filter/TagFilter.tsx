
export const TagFilter = ({tagsData, title='Default tag title', setSelectedBlockchain, dropdownTitle='Select here a blockchain'}:any) => {

    let tagList = tagsData.map((tag: any) => (

        <div tabIndex={0} key={tag} className="tag-filter__dropdown-option">

            <input id={tag} className="tag" type="radio" name="blockchains" 
            onChange={event => setSelectedBlockchain(event.target.id)} /> 
            
            <label htmlFor={tag}>{tag}</label>
            
        </div>
    ))

    
    
    return (

        <div tabIndex={0} className="tag-filter__container">

            <span className="tag-filter__title">{dropdownTitle}</span> 

            <div className="tag-filter__dropdown">

                {tagsData ? tagList : <div className="tag">{title}</div>}
                
            </div>
            
        </div>
    )
    
}

