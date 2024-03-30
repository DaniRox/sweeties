const CardGallery = ({image, title}) => {
    return(
        <div className="bg-tiffany grow-0 lg:grow h-64 w-64 lg:h-auto lg:w-1/5 flex flex-col">
            <img src={image} alt="" className=""/>
            <h1 className="text-eerie font-bodoni text-h2 py-2 px-4">{title}</h1>
        </div>
    )
}

export default CardGallery;