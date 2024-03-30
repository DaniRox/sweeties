import CardServices from "./CardServices";

function Services() {
    return (
        <div className="bg-smoke w-full px-10 py-20 sm:px-16 md:px-24 lg:px-40">
            <h2 className="text-h1 font-bodoni text-eerie text-center pb-6">Servicios</h2>
            <p className="text-p1 font-mandali text-hookers tracking-wider">En Sweeties, creamos magia comestible. Desde tortas personalizadas para bodas y cumpleaños hasta pasteles para eventos corporativos, nuestro talento pastelero da vida a tus sueños más dulces. Cada creación es una obra maestra que deleitará a tus invitados y te dejará con ganas de más.</p>
            <div className="flex flex-row justify-center md:justify-between flex-wrap py-16 gap-12">
                <CardServices title="Catering dulce" text="Lorem ipsum dolor sit amet consectetur. Gravida aliquam sagittis dui imperdiet urna lobortis. Cursus ante commodo enim"/>
                <CardServices title="Catering dulce" text="Lorem ipsum dolor sit amet consectetur. Gravida aliquam sagittis dui imperdiet urna lobortis. Cursus ante commodo enim"/>
                <CardServices title="Catering dulce" text="Lorem ipsum dolor sit amet consectetur. Gravida aliquam sagittis dui imperdiet urna lobortis. Cursus ante commodo enim"/>
                <CardServices title="Catering dulce" text="Lorem ipsum dolor sit amet consectetur. Gravida aliquam sagittis dui imperdiet urna lobortis. Cursus ante commodo enim"/>
            </div>
        </div>
    )
}

export default Services;