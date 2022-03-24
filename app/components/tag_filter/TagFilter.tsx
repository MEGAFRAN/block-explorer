
export const TagFilter = ({tagsData, title='Default tag title', setSelectedBlockchain}:any) => {

    let tagList = tagsData.map((tag: any) => (

        <div tabIndex={0} key={tag} className="tag-filter__container--dropdown-option">

            <input id={tag} className="tag" type="radio" name="blockchains" 
            onChange={event => setSelectedBlockchain(event.target.id)} /> 
            
            <label htmlFor={tag}>{tag}</label>
            
        </div>
    ))

    
    
    return (

        <div tabIndex={0} className="tag-filter__container">

            <div className="tag-filter__container--dropdown">

                {tagsData ? tagList : <div className="tag">{title}</div>}
                
            </div>
            
        </div>
    )
    
}

