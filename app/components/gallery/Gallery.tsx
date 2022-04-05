export const Gallery = ({galleryData}:any) => {

    let imageList = galleryData.map( ( {image_thumbnail_url}: any , index: number) => (

        <img src={image_thumbnail_url} alt={image_thumbnail_url} key={index}/>

    ))

    
    
    return (

        <div tabIndex={0} className="gallery__container">

            { galleryData ? imageList : null }
            
        </div>
    )
    
}

