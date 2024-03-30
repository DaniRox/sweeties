import CardGallery from "./CardGallery";
import Photo1 from "../../../assets/photos/img-1.jpg";
import Photo2 from "../../../assets/photos/img-2.jpg";
import Photo3 from "../../../assets/photos/img-3.jpg";
import Photo4 from "../../../assets/photos/img-4.jpg";

function Gallery() {
    return (
        <div className="bg-azure w-full px-10 py-20 sm:px-16 md:px-24 lg:px-40">
            <h2 className="text-h1 font-bodoni text-eerie text-center pb-6">Galería</h2>
            <p className="text-p1 font-mandali text-hookers tracking-wider">Sumergite en un mundo de colores y sabores con nuestra galería de tortas y postres. Cada imagen captura la esencia de nuestras creaciones, desde detalles decorativos meticulosos hasta combinaciones de sabores irresistibles. Inspírate con nuestras obras maestras y déjanos convertir tus ideas en realidad.</p>
            <div className="flex flex-row felx-wrap justify-center lg:justify-between flex-wrap py-16 gap-8 md:gap-10 lg:gap-12">
                <CardGallery title="Postres" image={Photo1}/>
                <CardGallery title="Mesa Dulce" image={Photo2}/>
                <CardGallery title="Pasteles Elegantes" image={Photo3}/>
                <CardGallery title="Tortas Tematicas" image={Photo4}/>
            </div>
        </div>
    )
}

export default Gallery;