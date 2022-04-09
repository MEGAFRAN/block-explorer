export const TagFilter = ({tagsData, title='Default tag title', setSelectedBlockchain, dropdownTitle, mode}:any) => {

    let tagList = tagsData.map((tag: any) => (

        <div tabIndex={0} key={tag} className="tag-filter__dropdown-option">

            <input id={tag +'-'+ mode} value={tag} className="tag" type="radio" name={mode} 
            onChange={event => setSelectedBlockchain(event.target.value)} 
            checked={dropdownTitle === tag}/> 
            
            <label htmlFor={tag +'-'+ mode}>{tag}</label>
            
        </div>
    ))

    
    return (

        <div tabIndex={0} className="tag-filter__container">

            <span className="tag-filter__title">{dropdownTitle ? `${dropdownTitle} Network` : 'Select here a blockchain'}</span> 

            <div className="tag-filter__dropdown">

                {tagsData ? tagList : <div className="tag">{title}</div>}
                
            </div>
            
        </div>
    )
    
}

