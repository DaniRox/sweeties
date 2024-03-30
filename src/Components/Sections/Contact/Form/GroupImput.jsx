const GroupImput = ({text, className}) => {
    return (
        <div className={"flex flex-col p-4 " + className}>
            <label htmlFor="" className="text-eerie font-bodoni text-p1">{text}</label>
            <imput className="w-full h-8 border-b-4 border-b-smoke"></imput>
        </div>
    )
}

export default GroupImput;