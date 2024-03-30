import Form from "./Form/Form";

function Contact() {
    return (
        <div className="bg-smoke flex flex-col items-center w-full px-10 py-20 sm:px-16 md:px-24 lg:px-40">
            <h2 className="text-h1 font-bodoni text-eerie text-center pb-6">Contacto</h2>
            <p className="text-p1 font-mandali text-hookers tracking-wider pb-10">¿Listo para llevar tus eventos al siguiente nivel de dulzura? ¡Contactanos hoy mismo! Completá el formulario a continuación y nos pondremos en contacto con vos en breve. Ya sea que necesites una consulta personalizada o desees reservar tu próxima torta, estamos acá para ayudarte a hacer realidad tus sueños más dulces.</p>
            <Form />
        </div>
    )
}

export default Contact;