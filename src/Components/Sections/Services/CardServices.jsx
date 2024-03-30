const CardServices = ({title, text}) => {
    return(
        <div className="bg-hookers grow-0 w-3/4 sm:w-2/3 md:grow md:w-2/5 xl:w-1/5 py-12 px-10">
            <h1 className="text-smoke font-bodoni text-h2 pb-4">{title}</h1>
            <p className="text-smoke font-mandali text-p1 leading-7 tracking-wide">{text}</p>
        </div>
    )
}

export default CardServices;