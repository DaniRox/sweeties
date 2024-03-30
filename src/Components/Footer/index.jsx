import IconFacebook from "../../assets/icons/icon-facebook.svg";
import IconWhatsapp from "../../assets/icons/icon-whatsapp.svg";
import IconInstagram from "../../assets/icons/icon-instagram.svg";

const Footer = () => {
    return (
        <div className="bg-eerie flex flex-col items-center py-6">
            <div className="flex flex-row gap-16 py-4">
                <img src={IconWhatsapp} alt="" className="w-8"/>
                <img src={IconFacebook} alt="" className="w-8"/>
                <img src={IconInstagram} alt="" className="w-8"/>
            </div>
            <p className="text-smoke font-bodoni text-p2">Términos de Privacidad</p>
            <p className="text-smoke font-bodoni text-p1">Diseño y Desarrollo por DaniRox</p>
        </div>
    )
}

export default Footer;