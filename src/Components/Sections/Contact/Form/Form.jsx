import GroupImput from "./GroupImput";

const Form = () => {
    return (
        <div className="bg-french flex flex-row flex-wrap w-full max-w-sm md:max-w-lg p-8">
            <GroupImput text={"Nombre"} className="w-1/2" />
            <GroupImput text={"Email"} className="w-1/2"/>
            <GroupImput text={"Mensaje"} className="w-full"/>
        </div>
    )
}

export default Form;